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
    // Log the feedback for now since SendGrid requires domain verification
    console.log('===== FEEDBACK EMAIL =====');
    console.log('To: support@vatremover.co.za');
    console.log('From:', params.email);
    console.log('Subject:', params.subject);
    console.log('Name:', params.name);
    console.log('Message:', params.message);
    console.log('Timestamp:', new Date().toISOString());
    console.log('==========================');

    // For now, return true since we're logging the feedback
    // Once domain verification is complete, uncomment the SendGrid code below
    
    /* 
    const msg = {
      to: 'support@vatremover.co.za',
      from: 'noreply@vatremover.co.za', // This needs to be verified in SendGrid
      replyTo: params.email,
      subject: `VAT Calculator Feedback: ${params.subject}`,
      html: `
        <h2>New Feedback from VAT Calculator</h2>
        <p><strong>Name:</strong> ${params.name}</p>
        <p><strong>Email:</strong> ${params.email}</p>
        <p><strong>Subject:</strong> ${params.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${params.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from VAT Calculator feedback form</small></p>
      `,
      text: `
        New Feedback from VAT Calculator
        
        Name: ${params.name}
        Email: ${params.email}
        Subject: ${params.subject}
        
        Message:
        ${params.message}
        
        ---
        Sent from VAT Calculator feedback form
      `
    };

    await sgMail.send(msg);
    */
    
    return true;
  } catch (error: any) {
    console.error('SendGrid email error:', error);
    if (error.response) {
      console.error('SendGrid error details:', error.response.body);
    }
    return false;
  }
}