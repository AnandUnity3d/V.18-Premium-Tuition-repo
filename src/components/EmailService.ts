// Email service configuration
// Note: You'll need to set up EmailJS account and replace these values

export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_v18tuition', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_demo_booking', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'your_public_key_here', // Replace with your EmailJS public key
};

// Email template for demo booking
export const createEmailTemplate = () => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
        <h1 style="color: white; margin: 0; font-size: 28px;">V.18 Premium Tuition Center</h1>
        <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">New Demo Class Booking Request</p>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Student Information</h2>
        <p><strong>Student Name:</strong> {{student_name}}</p>
        <p><strong>Parent/Guardian:</strong> {{parent_name}}</p>
        <p><strong>Phone:</strong> {{phone}}</p>
        <p><strong>Email:</strong> {{email}}</p>
        
        <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-top: 30px;">Academic Details</h2>
        <p><strong>Class:</strong> {{class}}</p>
        <p><strong>Medium:</strong> {{medium}}</p>
        <p><strong>Subjects of Interest:</strong> {{subjects}}</p>
        
        <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-top: 30px;">Visit Details</h2>
        <p><strong>Preferred Date:</strong> {{visit_date}}</p>
        <p><strong>Preferred Time:</strong> {{visit_time}}</p>
        
        <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-top: 30px;">Location Information</h2>
        <p><strong>Nearest Location:</strong> {{location}}</p>
        <p><strong>Full Address:</strong> {{address}}</p>
        
        <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-top: 30px;">Additional Information</h2>
        <p>{{additional_info}}</p>
        
        <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin-top: 30px;">
          <p style="margin: 0; color: #666; font-size: 14px;"><strong>Submission Date:</strong> {{submission_date}}</p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 20px; color: #666; font-size: 14px;">
        <p>This is an automated message from V.18 Premium Tuition Center booking system.</p>
      </div>
    </div>
  `;
};

// Instructions for EmailJS setup
export const EMAILJS_SETUP_INSTRUCTIONS = `
To set up email functionality:

1. Go to https://www.emailjs.com/ and create a free account
2. Create a new email service (Gmail, Outlook, etc.)
3. Create a new email template using the template above
4. Get your Service ID, Template ID, and Public Key
5. Replace the values in EMAIL_CONFIG
6. Update the BookingModal component with your actual keys

Template variables to use in EmailJS:
- {{student_name}}
- {{parent_name}}
- {{phone}}
- {{email}}
- {{class}}
- {{medium}}
- {{subjects}}
- {{visit_date}}
- {{visit_time}}
- {{location}}
- {{address}}
- {{additional_info}}
- {{submission_date}}
- {{to_email}} (set to: anandbiradar002@gmail.com)
`;