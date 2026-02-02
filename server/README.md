# JoinBotics Email Server

Backend service for handling form submissions and sending emails.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure email (.env)
copy .env.example .env
# Edit .env with your email credentials

# 3. Start server
npm start

# 4. Test it
# Visit http://localhost:5173/contact or /careers
# Fill the form and submit
```

## What This Does

Handles form submissions from:
- ✉️ Contact form (`/api/contact`)
- 💼 Career applications (`/api/careers`)

Sends emails to:
- Team inbox (all submission details)
- User email (confirmation)

## Files

| File | Purpose |
|------|---------|
| `index.js` | Main Express server & API endpoints |
| `package.json` | Dependencies (express, nodemailer, cors) |
| `.env.example` | Configuration template (copy to `.env`) |
| `.env.production` | Production configuration template |
| `.gitignore` | Don't commit `.env` and node_modules |

## Configuration

Edit `.env` with your settings:

```
# Email service (gmail, outlook, etc.)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Where to send emails
CONTACT_FORM_EMAIL=contact@joinbotics.com
CAREERS_FORM_EMAIL=careers@joinbotics.com

# Server settings
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## API Endpoints

### POST /api/contact
Contact form submission

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "inquiryType": "program",
  "message": "I want to know more..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully."
}
```

### POST /api/careers
Career application

**Request:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "9876543210",
  "position": "STEM Trainer",
  "location": "Bangalore",
  "experience": "2 years",
  "resume": "https://drive.google.com/...",
  "coverLetter": "Optional text..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your application has been submitted successfully."
}
```

### GET /api/health
Server health check

**Response:**
```json
{
  "status": "Server is running"
}
```

## Email Flow

When someone submits a form:

1. **Frontend validates** - Basic form validation
2. **POST to backend** - Sends JSON data to API
3. **Backend validates** - Checks required fields
4. **Send emails:**
   - Email #1 → Team with all details
   - Email #2 → User with confirmation
5. **Return response** - Success or error
6. **Frontend updates** - Shows status to user

## Troubleshooting

### Server won't start
```bash
# Check if port 5000 is in use
netstat -ano | findstr :5000

# Change port in .env if needed
PORT=3000
```

### Email configuration error
```
❌ Email configuration error: Invalid credentials
```
- Verify `EMAIL_USER` and `EMAIL_PASSWORD` in `.env`
- For Gmail, use an App Password (not your account password)
- Check email service SMTP settings

### Can't connect from frontend
```
Failed to send message. Please check your connection and try again.
```
- Make sure server is running
- Check `FRONTEND_URL` in `.env`
- Verify CORS settings in `index.js`

### Emails going to spam
- For production, add SPF and DKIM records
- Don't send from @gmail.com for business
- Use proper email signatures
- Avoid spam trigger words

## Email Configuration Options

### Gmail (Recommended)
1. Go to https://myaccount.google.com/apppasswords
2. Generate App Password
3. Use in `.env`

### Outlook
Use your Outlook password directly

### SendGrid
Use API key instead of password

### Custom SMTP
Use your company's mail server

## Logs

Server logs show:
```
✅ Email sent: 250 2.0.0 OK
❌ Error sending email: Invalid credentials
```

Check these logs to debug email issues.

## Development

### Run with auto-reload
```bash
npm run dev
```

### Check dependencies
```bash
npm list
```

### Update dependencies
```bash
npm update
```

## Deployment

### Heroku
```bash
heroku create app-name
git push heroku main
heroku config:set EMAIL_SERVICE=gmail EMAIL_USER=... EMAIL_PASSWORD=...
```

### Railway / Render
- Connect GitHub repository
- Set environment variables
- Deploy automatically

### Manual VPS
```bash
git clone repo
npm install
npm start
```

## Environment Variables

| Variable | Required | Example |
|----------|----------|---------|
| EMAIL_SERVICE | Yes | gmail, outlook |
| EMAIL_USER | Yes | your-email@gmail.com |
| EMAIL_PASSWORD | Yes | app-password-16-chars |
| EMAIL_FROM | Yes | noreply@domain.com |
| CONTACT_FORM_EMAIL | Yes | contact@joinbotics.com |
| CAREERS_FORM_EMAIL | Yes | careers@joinbotics.com |
| PORT | No | 5000 (default) |
| NODE_ENV | No | development, production |
| FRONTEND_URL | Yes | http://localhost:5173 |

## Security

✅ Implemented:
- HTML escaping (prevents injection)
- CORS validation
- Environment variables for secrets
- Input validation

⚠️ Consider adding:
- Rate limiting
- API authentication
- HTTPS in production
- Email verification

## Next Steps

1. ✅ Install dependencies
2. ✅ Configure `.env`
3. ✅ Start server
4. ✅ Test with forms
5. 🚀 Deploy to production

## Support

- See `EMAIL_SETUP_GUIDE.md` for detailed setup
- See `QUICK_EMAIL_START.md` for quick reference
- See `EMAIL_CONFIG_EXAMPLES.md` for other email services
- See `ARCHITECTURE_DIAGRAMS.md` for flow diagrams

---

**Status:** ✅ Ready  
**Last Updated:** February 2, 2026  
**Tested With:** Node.js v18+, npm v9+
