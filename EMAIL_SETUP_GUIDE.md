# Email Form Submission Setup Guide

## Overview
Your Join Botics website now has email functionality for both Contact and Career form submissions. Forms will send data to a Node.js/Express backend which then sends confirmation emails to both the user and your team.

## Architecture
```
Contact/Career Form (React)
        ↓
   API Request (Fetch)
        ↓
Express Server (Node.js)
        ↓
Nodemailer
        ↓
User Email + Join Botics Email
```

## Setup Instructions

### Step 1: Install Server Dependencies

Navigate to the server folder and install packages:

```bash
cd server
npm install
```

This will install:
- `express` - Web framework
- `nodemailer` - Email sending
- `cors` - Cross-origin requests
- `dotenv` - Environment variables

### Step 2: Configure Email Settings

1. Copy `.env.example` to `.env`:
```bash
copy .env.example .env
```

2. Edit `.env` file with your email configuration:

#### Option A: Using Gmail (Recommended)
```
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@joinbotics.com
CONTACT_FORM_EMAIL=contact@joinbotics.com
CAREERS_FORM_EMAIL=careers@joinbotics.com
PORT=5000
FRONTEND_URL=http://localhost:5173
```

**To get Gmail App Password:**
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer" (or your OS)
3. Generate an app password
4. Copy it to `EMAIL_PASSWORD` in `.env`

#### Option B: Using Other Email Services
For Outlook, Yahoo, or custom SMTP:

```
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

Or for custom SMTP:
```
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-password
```

### Step 3: Start the Server

```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

You should see:
```
🚀 Server running on http://localhost:5000
📧 Contact emails will be sent to: contact@joinbotics.com
📧 Career emails will be sent to: careers@joinbotics.com
✅ Email service configured successfully
```

### Step 4: Make Sure Frontend Runs on Port 5173

In another terminal, run your frontend:
```bash
cd client
npm run dev
```

## Email Flow

### Contact Form Submission
1. User fills form on `/contact` page
2. Form validates and sends POST to `/api/contact`
3. Server receives request
4. **Two emails are sent:**
   - Admin email to `CONTACT_FORM_EMAIL` with full submission details
   - Confirmation email to user with their message echoed back
5. User sees success message

### Career Form Submission
1. Applicant fills form on `/careers` page
2. Form validates and sends POST to `/api/careers`
3. Server receives request
4. **Two emails are sent:**
   - Recruitment email to `CAREERS_FORM_EMAIL` with application details
   - Confirmation email to applicant with application acknowledgment
5. Applicant sees success message

## API Endpoints

### POST /api/contact
**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "inquiryType": "program",
  "message": "I want to know more about your programs"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Your message has been sent successfully. Check your email for confirmation."
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "Missing required fields: name, email, message"
}
```

### POST /api/careers
**Request body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "9876543210",
  "position": "STEM Trainer",
  "location": "Bangalore",
  "experience": "2 years",
  "resume": "https://drive.google.com/...",
  "coverLetter": "I'm passionate about education..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Your application has been submitted successfully. Check your email for confirmation."
}
```

## Troubleshooting

### "Failed to send message" Error
**Problem:** Server not running or frontend can't connect to backend

**Solutions:**
1. Make sure server is running on `http://localhost:5000`
2. Check if port 5000 is free (use `netstat -ano | findstr :5000` on Windows)
3. Verify `FRONTEND_URL` in `.env` matches your frontend URL
4. Check browser console for network errors

### "❌ Email configuration error"
**Problem:** Email credentials are wrong

**Solutions:**
1. Verify `EMAIL_USER` and `EMAIL_PASSWORD` are correct
2. If using Gmail, make sure you generated an App Password
3. If using other services, check if SMTP is enabled
4. Try sending a test email first

### Emails not being sent but no error
**Problem:** Firewall or ISP blocking SMTP

**Solutions:**
1. Use port 587 (TLS) or 465 (SSL) instead of default
2. Try a different email service (Gmail, Mailgun, SendGrid)
3. Check if your ISP blocks SMTP ports
4. Use a VPN if needed

## Email Templates

Both forms send HTML-formatted emails. You can customize the email templates in `server/index.js`:

- Contact form emails: Lines ~70-100
- Career form emails: Lines ~130-165

## Production Deployment

When deploying to production:

1. **Update `.env` variables:**
   ```
   FRONTEND_URL=https://yourdomain.com
   PORT=5000 (or your production port)
   ```

2. **Update API endpoint in React components:**
   
   In `Contact.jsx` and `Careers.jsx`, change:
   ```javascript
   fetch("http://localhost:5000/api/contact", ...)
   ```
   
   To:
   ```javascript
   fetch("https://yourdomain-api.com/api/contact", ...)
   ```

3. **Recommended deployment options:**
   - Heroku (free tier available)
   - Railway.app
   - Render.com
   - AWS Lambda + API Gateway
   - DigitalOcean

## Security Considerations

✅ **Already implemented:**
- HTML escaping to prevent injection attacks
- CORS validation (only your frontend can call the API)
- Environment variables for sensitive data
- Input validation on both frontend and backend

⚠️ **Recommended for production:**
- Rate limiting (prevent spam)
- reCAPTCHA on forms
- HTTPS only
- API authentication tokens
- Email verification
- Database logging for submissions

## Alternative: Using Services

If you don't want to manage your own email server:

### SendGrid (Free tier: 100 emails/day)
```bash
npm install @sendgrid/mail
```

### Mailgun
```bash
npm install mailgun.js
```

### AWS SES (Free tier: 62,000 emails/month)
```bash
npm install aws-sdk
```

Let us know if you'd like code examples for these services!

## Testing

### Test Contact Form
1. Go to `http://localhost:5173/contact`
2. Fill the form with test data
3. Click "Send Message"
4. Check your email (and spam folder) for confirmation

### Test Career Form
1. Go to `http://localhost:5173/careers`
2. Select a position
3. Fill the application form
4. Click "Submit Application"
5. Check your email for confirmation

## Next Steps

1. ✅ Set up server dependencies
2. ✅ Configure `.env` file
3. ✅ Start the server
4. ✅ Test the forms
5. 📦 Deploy to production when ready

## Support

If you encounter any issues:
1. Check server console for error messages
2. Check browser console (F12) for frontend errors
3. Verify all environment variables are set correctly
4. Test email configuration separately
5. Check CORS settings if getting "blocked by CORS" errors

Happy emailing! 🚀
