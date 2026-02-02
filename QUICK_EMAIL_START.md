# Quick Start - Email Setup

## In 5 Minutes:

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Set Up Email
```bash
copy .env.example .env
# Edit .env with your Gmail/Outlook credentials
```

### 3. Start Server
```bash
npm start
```

You should see: ✅ Email service configured successfully

### 4. Test It
- Go to http://localhost:5173/contact
- Fill form and submit
- Check your email (and spam folder)

## Email Configuration Cheat Sheet

### Gmail Setup
1. Go to https://myaccount.google.com/apppasswords
2. Select Mail → Windows Computer (or your OS)
3. Copy the generated password
4. In `.env`:
```
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=paste-app-password-here
```

### Where Emails Go
- Contact form → `contact@joinbotics.com`
- Career form → `careers@joinbotics.com`
- (Change these in `.env` if needed)

## Troubleshooting

| Problem | Fix |
|---------|-----|
| "Can't connect to server" | Make sure `npm start` is running in server folder |
| "Email failed" | Check `.env` credentials and `npm start` logs |
| "Still no email?" | Check spam folder, verify sender email |
| Port 5000 in use | Change PORT in `.env`, update frontend API URL |

## Frontend Changes Made
✅ Contact form now sends to server
✅ Career form now sends to server  
✅ Loading states during submission
✅ Better error messages
✅ Confirmation emails to users

## Server Files Created
- `server/index.js` - Main API server
- `server/package.json` - Dependencies
- `server/.env.example` - Configuration template
- `server/.gitignore` - Git ignore rules

That's it! Forms → Server → Email ✉️
