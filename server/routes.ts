import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendFeedbackEmail } from "./sendgrid";

export async function registerRoutes(app: Express): Promise<Server> {
  // Feedback form submission endpoint
  app.post('/api/feedback', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Basic validation
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }

      // Send email via SendGrid
      const emailSent = await sendFeedbackEmail({
        name: name.substring(0, 50), // Limit for security
        email: email.substring(0, 100),
        subject: subject.substring(0, 200),
        message: message.substring(0, 2000)
      });

      if (emailSent) {
        res.json({ 
          success: true, 
          message: 'Feedback submitted successfully! We will get back to you soon.' 
        });
      } else {
        res.status(500).json({ 
          error: 'Failed to send email. Please try again later.' 
        });
      }
    } catch (error) {
      console.error('Feedback submission error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
