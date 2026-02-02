# 🚀 Email Setup - Troubleshooting & Quick Fixes

## Common Issues & Solutions

### ❌ "Server Connection Refused"

**Problem:** Can't connect to backend server

**Solution:**
```bash
# Make sure server is running in another terminal
cd server
npm start

# Check if server started successfully
# Should see: ✅ Email service configured successfully
```

**Alternative:** Server might be running on wrong port
```bash
# Check if port 5000 is already in use (Windows)
netstat -ano | findstr :5000

# If in use, change PORT in .env:
PORT=3000

# Then update frontend API calls from:
fetch("http://localhost:5000/api/contact", ...)
# To:
fetch("http://localhost:3000/api/contact", ...)
```

---

### ❌ "Email Configuration Error" / Emails Not Sending

**Problem:** Server can't send emails

**Checklist:**
- [ ] `.env` file exists (not `.env.example`)
- [ ] `EMAIL_USER` is filled
- [ ] `EMAIL_PASSWORD` is filled
- [ ] `EMAIL_SERVICE` is correct (gmail, outlook, etc.)

**For Gmail:**
```
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx (16-char app password)
```

**Get Gmail App Password:**
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and your device
3. Click "Generate"
4. Copy the 16-character password (with spaces)
5. Paste in `.env` as `EMAIL_PASSWORD`

**For Outlook:**
```
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-account-password
```

**Check error in server logs:**
```
❌ Email configuration error: Invalid credentials
```
→ Fix: Verify email/password are correct

```
❌ Email configuration error: SMTP connection failed
```
→ Fix: Check internet, firewall, or try different email service

---

### ❌ "Missing required fields"

**Problem:** Form validation fails

**Solution:** Make sure you fill these fields:

**Contact Form (Required):**
- [ ] Name
- [ ] Email (must be valid format)
- [ ] Message

**Career Form (Required):**
- [ ] Name
- [ ] Email (must be valid format)
- [ ] Phone (must be 10 digits)
- [ ] Position
- [ ] Location
- [ ] Experience
- [ ] Resume (must be valid URL like https://...)

---

### ❌ "Failed to send message"

**Problem:** Form submission failed

**Likely causes:**
1. Server not running
2. Email configuration wrong
3. Network connection issue

**Fix:**
```bash
# 1. Check server is running
cd server
npm start

# 2. Check .env has all required fields
cat .env

# 3. Test email separately
# See "Test Email Separately" below
```

---

### ✉️ Emails Go to Spam

**Problem:** Emails arrive but go to spam folder

**Reasons:**
- Normal for first-time emails
- Sender domain not verified
- Missing SPF/DKIM records

**Fixes for development:**
1. Whitelist sender in your email
2. Check spam folder
3. Mark as "Not Spam"

**Fixes for production:**
1. Add SPF record to your domain:
   ```
   v=spf1 include:gmail.com ~all
   ```

2. Add DKIM record (ask your email service)

3. Use professional domain email (not @gmail.com)

---

### 🔍 No Error But Email Doesn't Arrive

**Checklist:**
- [ ] Check spam folder
- [ ] Check email spelling (typo in address?)
- [ ] Check server logs for "Email sent: 250 2.0.0 OK"
- [ ] Wait 1-2 minutes (might be delayed)
- [ ] Try with different test email
- [ ] Check inbox with the email you filled in form

**Debug with server logs:**
```
✅ Email sent: 250 2.0.0 OK [message ID]
```
→ Email was sent successfully, check spam folder

```
❌ Error sending email: ...
```
→ Email sending failed, read error message

---

## 🧪 Testing & Verification

### Test Form Submission Step-by-Step

**1. Open browser DevTools (F12)**
- Go to Network tab
- Keep it open while testing

**2. Fill Contact Form**
- Name: Test User
- Email: your-actual-email@gmail.com
- Message: This is a test

**3. Click "Send Message"**
- In DevTools, look for network request called "contact"
- Click it to see request/response

**4. Check Response**
```json
{
  "success": true,
  "message": "..."
}
```
If success: true, email was sent

**5. Check Your Email**
- Check inbox AND spam folder
- Should have 2 emails (team + confirmation)

---

### Test Email Separately (Advanced)

Create `test-email.js` in server folder:

```javascript
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const testEmail = {
  from: process.env.EMAIL_FROM,
  to: 'test@example.com',  // Change to your email
  subject: 'Test Email',
  text: 'If you see this, email works!'
};

transporter.sendMail(testEmail, (err, info) => {
  if (err) {
    console.error('❌ Email failed:', err.message);
  } else {
    console.log('✅ Email sent:', info.response);
  }
  process.exit();
});
```

Run it:
```bash
node test-email.js
```

---

## 🔧 Advanced Troubleshooting

### Check if Dependencies Are Installed

```bash
cd server
npm list
```

Should show:
- express
- nodemailer
- cors
- dotenv

If missing, run:
```bash
npm install
```

### Check Node.js Version

```bash
node --version
```

Should be v16 or higher

### View Server Logs

Server logs show what's happening:
```
🚀 Server running on http://localhost:5000
📧 Contact emails will be sent to: contact@joinbotics.com
✅ Email service configured successfully
```

Errors in logs help debug issues.

### Check .env File Format

Should look like:
```
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

NOT like:
```
EMAIL_SERVICE = gmail  # ❌ Spaces around =
EMAIL_USER='your-email@gmail.com'  # ❌ Quotes
```

### CORS Error?

**Error:** "blocked by CORS policy"

**Fix:** In `.env`, make sure `FRONTEND_URL` matches your frontend:
```
FRONTEND_URL=http://localhost:5173  # For local development
FRONTEND_URL=https://yourdomain.com  # For production
```

---

## 🚨 Emergency Fixes

### Everything Broken - Start Fresh

```bash
# Stop everything (Ctrl+C in all terminals)

# Delete and reinstall
cd server
rm -r node_modules package-lock.json
npm install

# Recreate .env
copy .env.example .env
# Edit with your credentials

# Start fresh
npm start
```

### Port Already in Use

```bash
# Windows - Find what's using port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID with number from above)
taskkill /PID [PID] /F

# Or change port in .env and update frontend API calls
```

### Email Won't Send - Nuclear Option

Try a different email service:

**Option A: Switch to Outlook**
```
EMAIL_SERVICE=outlook
EMAIL_USER=your@outlook.com
EMAIL_PASSWORD=your-password
```

**Option B: Switch to SendGrid (free tier)**
1. Sign up at sendgrid.com
2. Generate API key
3. Install: `npm install @sendgrid/mail`
4. Create new server code for SendGrid

**Option C: Use custom SMTP**
Ask your email provider for SMTP details

---

## 📞 When to Seek Help

If you've tried everything above and still stuck:

1. **Share these details:**
   - Error message (exact text)
   - Server logs (what it prints)
   - Which step fails
   - Email service used

2. **Check documentation:**
   - `EMAIL_SETUP_GUIDE.md` - Detailed setup
   - `EMAIL_CONFIG_EXAMPLES.md` - Your email service
   - `ARCHITECTURE_DIAGRAMS.md` - How it works

3. **Search online:**
   - Copy exact error message into Google
   - Add "nodemailer" or "express" to search

---

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] Server starts without errors
- [ ] Frontend can reach backend
- [ ] Forms validate inputs
- [ ] Forms submit without error
- [ ] Email received in inbox (or spam folder)
- [ ] Email contains correct information
- [ ] Both team and user emails received
- [ ] Loading states work
- [ ] Success message displays
- [ ] Form resets after success
- [ ] Error handling works (test empty form)

---

## 🎯 Quick Fix Chart

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| "Connection refused" | Server not running | Run `npm start` in server folder |
| "Invalid credentials" | Wrong email/password | Check `.env` file |
| Form won't submit | Frontend/backend error | Check browser DevTools Network tab |
| No email arrives | Spam folder or wrong address | Check spam and email address |
| Takes forever to submit | Server overloaded or slow | Check server logs |
| "Missing fields" error | Form validation | Fill all required fields |
| CORS error | Wrong FRONTEND_URL | Update in `.env` |
| Port 5000 in use | Another app using it | Change PORT in `.env` |

---

## 🚀 Quick Recovery Commands

```bash
# If everything breaks:
cd server
npm install
npm start

# If can't find npm:
# Restart your terminal (close and reopen)

# If port 5000 busy:
# Change in .env: PORT=3001
# Then update frontend API URL

# If forgot email password:
# Regenerate at https://myaccount.google.com/apppasswords
```

---

## 📊 Status Indicators

### Good Signs ✅
```
✅ Email service configured successfully
✅ Email sent: 250 2.0.0 OK
🚀 Server running on http://localhost:5000
```

### Bad Signs ❌
```
❌ Email configuration error: ...
❌ Error sending email: ...
Connection refused
SMTP connection failed
```

---

## Still Stuck?

1. Check all 7 documentation files
2. Review this troubleshooting guide completely
3. Verify every step in setup guide
4. Test with a different email address
5. Try a different email service
6. Ask for help with error messages

You've got this! 💪

---

**Last Updated:** February 2, 2026  
**Status:** Complete  
**Questions?** Check EMAIL_SETUP_GUIDE.md
