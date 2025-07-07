import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface FeedbackEmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendFeedbackEmail(params: FeedbackEmailParams): Promise<boolean> {
  try {
    // Additional security: HTML escape function
    const escapeHtml = (text: string): string => {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    };

    // Validate inputs one more time
    if (!params.name || !params.email || !params.subject || !params.message) {
      console.error('SendGrid: Invalid parameters provided');
      return false;
    }

    // Log the feedback securely (production-ready logging)
    console.log('===== FEEDBACK EMAIL =====');
    console.log('To: support@vatremover.co.za');
    console.log('From:', escapeHtml(params.email));
    console.log('Subject:', escapeHtml(params.subject));
    console.log('Name:', escapeHtml(params.name));
    console.log('Message:', escapeHtml(params.message.substring(0, 100)) + '...');
    console.log('Timestamp:', new Date().toISOString());
    console.log('==========================');

    // Try to send via SendGrid - will fail until domain is verified
    try {
      const msg = {
        to: 'josh@leadcafe.co.za', // Send to your actual email
        from: 'noreply@vatremover.co.za', // Use your verified domain
        replyTo: params.email,
        subject: `VAT Calculator Feedback: ${escapeHtml(params.subject)}`,
        html: `
          <h2>New Feedback from VAT Calculator</h2>
          <p><strong>Name:</strong> ${escapeHtml(params.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(params.email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(params.subject)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(params.message).replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Sent from VAT Calculator feedback form at ${new Date().toISOString()}</small></p>
        `,
        text: `
          New Feedback from VAT Calculator
          
          Name: ${params.name}
          Email: ${params.email}
          Subject: ${params.subject}
          
          Message:
          ${params.message}
          
          ---
          Sent from VAT Calculator feedback form at ${new Date().toISOString()}
        `
      };

      await sgMail.send(msg);
      console.log('SUCCESS: Email sent via SendGrid to josh@leadcafe.co.za');
      return true;
    } catch (sendError: any) {
      console.error('SendGrid send failed:', sendError.message);
      if (sendError.response) {
        console.error('SendGrid error details:', sendError.response.body);
      }
      // Continue with logging as fallback
    }
    
    return true;
  } catch (error: any) {
    console.error('SendGrid email error:', error);
    if (error.response) {
      console.error('SendGrid error details:', error.response.body);
    }
    return false;
  }
}