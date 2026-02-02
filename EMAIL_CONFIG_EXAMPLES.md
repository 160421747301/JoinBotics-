# Email Configuration Examples

## Gmail (Recommended - Free)

### Setup Steps:
1. Enable 2-Factor Authentication on your Gmail account
2. Go to https://myaccount.google.com/apppasswords
3. Select "Mail" and "Windows Computer" (or your OS)
4. Google will generate a 16-character password
5. Copy this password to `.env`

### .env Configuration:
```
EMAIL_SERVICE=gmail
EMAIL_USER=info@yourcompany.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
EMAIL_FROM=noreply@joinbotics.com
CONTACT_FORM_EMAIL=contact@joinbotics.com
CAREERS_FORM_EMAIL=careers@joinbotics.com
PORT=5000
FRONTEND_URL=http://localhost:5173
```

---

## Outlook / Microsoft 365

### .env Configuration:
```
EMAIL_SERVICE=outlook
EMAIL_USER=info@yourcompany.com
EMAIL_PASSWORD=your-password
EMAIL_FROM=noreply@joinbotics.com
CONTACT_FORM_EMAIL=contact@joinbotics.com
CAREERS_FORM_EMAIL=careers@joinbotics.com
PORT=5000
FRONTEND_URL=http://localhost:5173
```

---

## Yahoo Mail

### Setup Steps:
1. Generate an App Password at https://login.yahoo.com/account/security
2. Use the app-specific password in `.env`

### .env Configuration:
```
EMAIL_SERVICE=yahoo
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@joinbotics.com
CONTACT_FORM_EMAIL=contact@joinbotics.com
CAREERS_FORM_EMAIL=careers@joinbotics.com
PORT=5000
FRONTEND_URL=http://localhost:5173
```

---

## Custom SMTP Server

If you have your own mail server or hosting provider SMTP:

### .env Configuration:
```
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-password
EMAIL_FROM=noreply@joinbotics.com
CONTACT_FORM_EMAIL=contact@joinbotics.com
CAREERS_FORM_EMAIL=careers@joinbotics.com
PORT=5000
FRONTEND_URL=http://localhost:5173
```

**Update server/index.js for custom SMTP:**
Change the transporter setup (around line 19):

```javascript
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});
```

---

## SendGrid (Free tier: 100 emails/day)

### Setup:
1. Sign up at https://sendgrid.com/
2. Create API key
3. Install package: `npm install @sendgrid/mail`

### .env Configuration:
```
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=your-api-key
EMAIL_FROM=noreply@joinbotics.com
CONTACT_FORM_EMAIL=contact@joinbotics.com
CAREERS_FORM_EMAIL=careers@joinbotics.com
```

### Update server/index.js:
```javascript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Then use sgMail.send() instead of nodemailer
```

---

## AWS SES (Free tier: 62,000 emails/month)

### Setup:
1. Create AWS account
2. Verify email address in SES console
3. Create IAM credentials
4. Install: `npm install aws-sdk`

### .env Configuration:
```
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-key
AWS_SECRET_ACCESS_KEY=your-secret
EMAIL_FROM=noreply@joinbotics.com
CONTACT_FORM_EMAIL=contact@joinbotics.com
CAREERS_FORM_EMAIL=careers@joinbotics.com
```

---

## Mailgun (Free tier: 100 emails/day)

### Setup:
1. Sign up at https://mailgun.com/
2. Verify your domain
3. Get API key

### .env Configuration:
```
MAILGUN_DOMAIN=your-domain.mailgun.org
MAILGUN_API_KEY=key-xxx
EMAIL_FROM=noreply@joinbotics.com
CONTACT_FORM_EMAIL=contact@joinbotics.com
CAREERS_FORM_EMAIL=careers@joinbotics.com
```

---

## Comparison Table

| Service | Free Tier | Setup Time | Best For |
|---------|-----------|-----------|----------|
| Gmail | Unlimited | 5 min | Small to medium volume |
| Outlook | Unlimited | 5 min | Enterprise users |
| Yahoo | Unlimited | 5 min | Alternative email |
| Custom SMTP | Depends | Varies | Full control |
| SendGrid | 100/day | 10 min | Growing startups |
| AWS SES | 62K/month | 20 min | High volume |
| Mailgun | 100/day | 10 min | Developers |

---

## Testing Your Configuration

### Test Email Sending
```bash
# In server folder, create test.js:
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

transporter.sendMail({
  from: process.env.EMAIL_FROM,
  to: 'test@example.com',
  subject: 'Test Email',
  text: 'This is a test email'
}, (err, info) => {
  if (err) console.error(err);
  else console.log('Email sent:', info.response);
  process.exit();
});
```

Run with: `node test.js`

---

## Production Tips

1. **Don't hardcode credentials** - Always use `.env`
2. **Use environment-specific configs** - Different email for dev/production
3. **Monitor email sending** - Log failed attempts
4. **Set up bounce handling** - Remove invalid emails
5. **Consider rate limiting** - Prevent spam
6. **Add reCAPTCHA** - Bot prevention on forms

---

## Common Issues & Fixes

**"Invalid credentials"**
- Verify email/password are correct
- For Gmail, use App Password (not account password)
- For 2FA enabled accounts, generate App Password

**"SMTP port blocked"**
- Use port 587 (TLS) instead of 465 (SSL)
- Check with your ISP/network admin
- Use a different email service

**"Emails going to spam"**
- Add SPF record: `v=spf1 include:sendgrid.net ~all`
- Add DKIM record (ask your email service)
- Verify sender domain
- Don't use @gmail.com for business emails

**"Too many failed attempts"**
- Check email limits (free tier restrictions)
- Verify domain ownership (for custom domains)
- Contact email service support
