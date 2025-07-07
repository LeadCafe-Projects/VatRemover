import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendFeedbackEmail } from "./sendgrid";

export async function registerRoutes(app: Express): Promise<Server> {
  // Rate limiting for feedback endpoint
  const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
  const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
  const MAX_REQUESTS = 5; // 5 requests per 15 minutes per IP

  const checkRateLimit = (ip: string): boolean => {
    const now = Date.now();
    const clientData = rateLimitMap.get(ip);
    
    if (!clientData || now > clientData.resetTime) {
      rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
      return true;
    }
    
    if (clientData.count >= MAX_REQUESTS) {
      return false;
    }
    
    clientData.count++;
    return true;
  };

  // Security middleware for feedback endpoint
  const sanitizeInput = (input: string): string => {
    if (typeof input !== 'string') return '';
    return input
      .replace(/[<>]/g, '') // Remove potential HTML/script tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  };

  // Feedback form submission endpoint
  app.post('/api/feedback', async (req, res) => {
    // Rate limiting check
    const clientIP = req.ip || req.connection.remoteAddress || 'unknown';
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({ 
        error: 'Too many requests. Please try again in 15 minutes.' 
      });
    }
    try {
      const { name, email, subject, message } = req.body;

      // Type validation
      if (typeof name !== 'string' || typeof email !== 'string' || 
          typeof subject !== 'string' || typeof message !== 'string') {
        return res.status(400).json({ error: 'Invalid input types' });
      }

      // Length validation
      if (name.length < 1 || name.length > 50 ||
          email.length < 5 || email.length > 100 ||
          subject.length < 1 || subject.length > 200 ||
          message.length < 1 || message.length > 2000) {
        return res.status(400).json({ error: 'Input length validation failed' });
      }

      // Sanitize inputs
      const sanitizedName = sanitizeInput(name);
      const sanitizedEmail = sanitizeInput(email);
      const sanitizedSubject = sanitizeInput(subject);
      const sanitizedMessage = sanitizeInput(message);

      // Basic validation after sanitization
      if (!sanitizedName || !sanitizedEmail || !sanitizedSubject || !sanitizedMessage) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Enhanced email validation
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (!emailRegex.test(sanitizedEmail)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }

      // Send email via SendGrid
      const emailSent = await sendFeedbackEmail({
        name: sanitizedName,
        email: sanitizedEmail,
        subject: sanitizedSubject,
        message: sanitizedMessage
      });

      if (emailSent) {
        res.json({ 
          success: true, 
          message: 'Feedback submitted successfully! We will get back to you soon.' 
        });
      } else {
        res.status(500).json({ 
          success: false,
          error: 'Failed to send email. Please try again later.' 
        });
      }
    } catch (error) {
      console.error('Feedback submission error:', error);
      res.status(500).json({ 
        success: false,
        error: 'An unexpected error occurred. Please try again later.' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
