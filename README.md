V.18-Premium-Tuition-repo

## Email Setup Instructions

To enable email functionality for the booking form, you need to set up EmailJS:

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (v18premiumtuition@gmail.com)
5. Note down the Service ID

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Demo Booking Request - {{student_name}}

New demo booking request received:

Student Details:
- Student Name: {{student_name}}
- Parent/Guardian: {{parent_name}}
- Phone: {{phone}}
- Email: {{email}}
- Class: {{class}}
- Nearest Location: {{location}}

Preferred Schedule:
- Date: {{preferred_date}}
- Time: {{preferred_time}}

Submitted on: {{submission_date}}

Please contact the family to schedule the demo.
```

4. Save the template and note down the Template ID

### Step 4: Get Public Key
1. Go to "Account" in your dashboard
2. Find your Public Key
3. Copy it

### Step 5: Update Configuration
1. Open `src/config/emailConfig.ts`
2. Replace the placeholder values with your actual:
   - SERVICE_ID
   - TEMPLATE_ID  
   - PUBLIC_KEY

### Step 6: Update BookingModal Component
1. Open `src/components/BookingModal.tsx`
2. Import the config: `import { EMAIL_CONFIG } from '../config/emailConfig';`
3. Replace the placeholder values in the emailjs.send() call with:
   - EMAIL_CONFIG.SERVICE_ID
   - EMAIL_CONFIG.TEMPLATE_ID
   - EMAIL_CONFIG.PUBLIC_KEY

After completing these steps, the booking form will automatically send emails to v18premiumtuition@gmail.com when students submit demo requests.
