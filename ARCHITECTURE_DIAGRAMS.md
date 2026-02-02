# Architecture & Flow Diagrams

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    JoinBotics Website                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │         React Frontend (Vite)                             │   │
│  │         Port: 5173                                        │   │
│  │                                                            │   │
│  │  ┌─────────────────────┐  ┌──────────────────────┐       │   │
│  │  │  Contact.jsx        │  │  Careers.jsx         │       │   │
│  │  │  - Form validation  │  │  - Form validation   │       │   │
│  │  │  - API POST call    │  │  - API POST call     │       │   │
│  │  │  - Error handling   │  │  - Error handling    │       │   │
│  │  └─────────────────────┘  └──────────────────────┘       │   │
│  │           ↓ POST JSON              ↓ POST JSON           │   │
│  └──────────────────────────────────────────────────────────┘   │
│                          ↓                                        │
│                  HTTP localhost:5000                             │
│                          ↓                                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │    Node.js/Express Backend                               │   │
│  │    Port: 5000                                            │   │
│  │                                                            │   │
│  │  ┌───────────────────┐      ┌─────────────────────┐     │   │
│  │  │ /api/contact      │      │ /api/careers        │     │   │
│  │  │ - Validate data   │      │ - Validate data     │     │   │
│  │  │ - Format email    │      │ - Format email      │     │   │
│  │  │ - Send 2 emails   │      │ - Send 2 emails     │     │   │
│  │  └────────┬──────────┘      └────────┬────────────┘     │   │
│  │           ↓                          ↓                    │   │
│  │      ┌──────────────────────────────────────┐            │   │
│  │      │    Nodemailer (Email Engine)         │            │   │
│  │      │    Uses configured SMTP service      │            │   │
│  │      └──────────────┬───────────────────────┘            │   │
│  │                     ↓                                      │   │
│  └──────────────────────────────────────────────────────────┘   │
│                          ↓                                        │
│                   SMTP Connection                               │
│                   (Port 587 or 465)                             │
│                          ↓                                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │    Email Service (Gmail, Outlook, etc.)                  │   │
│  │                                                            │   │
│  │  ┌─────────────────┐        ┌──────────────────┐         │   │
│  │  │  Team Email     │        │  User Email      │         │   │
│  │  │  (Inbox)        │        │  (Inbox/Spam)    │         │   │
│  │  │                 │        │                  │         │   │
│  │  │  Full details   │        │  Confirmation &  │         │   │
│  │  │  All fields     │        │  Echo of message │         │   │
│  │  │  Timestamp      │        │                  │         │   │
│  │  └─────────────────┘        └──────────────────┘         │   │
│  │                                                            │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

## Contact Form Submission Flow

```
┌─────────────────────────┐
│  User visits /contact   │
└────────────┬────────────┘
             ↓
┌──────────────────────────────────┐
│ User fills form:                 │
│ • Name                           │
│ • Email                          │
│ • Phone (optional)               │
│ • Inquiry Type (optional)        │
│ • Message                        │
└─────────────┬──────────────────┘
              ↓
┌──────────────────────────────────┐
│ Frontend Validation:             │
│ ✓ Name not empty                │
│ ✓ Email valid format            │
│ ✓ Message not empty             │
└─────────────┬──────────────────┘
              ↓
     ┌────────────────┐
     │ Form Valid?    │
     └────┬───────┬──┘
    YES   │       │ NO
         ↓       ↓
    POST JSON  Show Error
       to      Message
    /api/
   contact
       ↓
┌──────────────────────────────┐
│ Server Receives Request      │
│ 1. Validate all fields       │
│ 2. Escape HTML (security)    │
│ 3. Create email content      │
└─────────────┬────────────────┘
              ↓
┌──────────────────────────────────────┐
│ Send Email #1 to Team                │
│ To: contact@joinbotics.com           │
│ Subject: New Contact Form Submission │
│ Content:                             │
│  - Name: John Doe                    │
│  - Email: john@example.com           │
│  - Phone: 9876543210                 │
│  - Inquiry: Program                  │
│  - Message: [Full message text]      │
│  - Timestamp                         │
└─────────────┬────────────────────────┘
              ↓
┌──────────────────────────────────────┐
│ Send Email #2 to User                │
│ To: john@example.com                 │
│ Subject: We received your message    │
│ Content:                             │
│  - Acknowledgment                    │
│  - Echo of submitted message         │
│  - Support info                      │
└─────────────┬────────────────────────┘
              ↓
┌──────────────────────────────────────┐
│ Return Success Response              │
│ {                                    │
│   success: true,                     │
│   message: "Email sent"              │
│ }                                    │
└─────────────┬────────────────────────┘
              ↓
┌──────────────────────────────────────┐
│ Frontend Updates UI                  │
│ 1. Show success message              │
│ 2. Display checkmark                 │
│ 3. Reset form fields                 │
│ 4. Auto-hide success (4 seconds)     │
└──────────────────────────────────────┘
```

## Career Application Submission Flow

```
┌────────────────────────────┐
│  User visits /careers      │
│  Clicks "Apply Now"        │
└────────────┬───────────────┘
             ↓
┌────────────────────────────────────┐
│ Application Form Displayed:        │
│ • Name                             │
│ • Email                            │
│ • Phone                            │
│ • Position (pre-filled or select)  │
│ • Location                         │
│ • Experience                       │
│ • Resume/CV Link                   │
│ • Cover Letter (optional)          │
└─────────────┬────────────────────┘
              ↓
┌──────────────────────────────────┐
│ Frontend Validation:             │
│ ✓ All required fields present   │
│ ✓ Email valid format            │
│ ✓ Phone is 10 digits            │
│ ✓ Resume URL valid              │
└─────────────┬──────────────────┘
              ↓
     ┌────────────────┐
     │ Form Valid?    │
     └────┬───────┬──┘
    YES   │       │ NO
         ↓       ↓
    POST JSON  Show Error
       to      Message
    /api/
   careers
       ↓
┌──────────────────────────────────────┐
│ Server Receives Request              │
│ 1. Validate all fields               │
│ 2. Check phone format (10 digits)    │
│ 3. Escape HTML (security)            │
│ 4. Create email content              │
└─────────────┬────────────────────────┘
              ↓
┌──────────────────────────────────────────┐
│ Send Email #1 to Recruitment Team        │
│ To: careers@joinbotics.com               │
│ Subject: New Job Application: STEM       │
│ Content:                                 │
│  - Name: Jane Doe                        │
│  - Email: jane@example.com               │
│  - Phone: 9876543210                     │
│  - Position: STEM Trainer                │
│  - Location: Bangalore                   │
│  - Experience: 2 years                   │
│  - Resume: [URL]                         │
│  - Cover Letter: [Full text]             │
│  - Application Timestamp                 │
└─────────────┬────────────────────────────┘
              ↓
┌──────────────────────────────────────────┐
│ Send Email #2 to Applicant               │
│ To: jane@example.com                     │
│ Subject: Application Received -          │
│          JoinBotics                      │
│ Content:                                 │
│  - Thank you for applying                │
│  - Position: STEM Trainer                │
│  - Next steps info (3-5 days)            │
│  - Company info                          │
└─────────────┬────────────────────────────┘
              ↓
┌──────────────────────────────────────┐
│ Return Success Response              │
│ {                                    │
│   success: true,                     │
│   message: "Application submitted"   │
│ }                                    │
└─────────────┬────────────────────────┘
              ↓
┌──────────────────────────────────────┐
│ Frontend Updates UI                  │
│ 1. Show success message              │
│ 2. Display checkmark icon            │
│ 3. Hide application form             │
│ 4. Auto-hide success (4 seconds)     │
└──────────────────────────────────────┘
```

## Error Handling Flow

```
┌──────────────────────────┐
│ Form Submission          │
└────────────┬─────────────┘
             ↓
     ┌───────────────┐
     │ Server Error? │
     └───┬───────┬───┘
    NO   │       │ YES
        ↓       ↓
     Success  ┌────────────────────┐
       ↓      │ Error Type?        │
    Return   └─┬────────────────┬──┘
     200 OK    │                │
              Missing     Validation
              Fields       Error
               ↓              ↓
          ┌──────────┐  ┌──────────┐
          │ 400 Bad  │  │ 400 Bad  │
          │ Request  │  │ Request  │
          └──┬───────┘  └──┬───────┘
             ↓             ↓
        ┌───────────────────────────┐
        │ Return Error Response:    │
        │ {                         │
        │   success: false,         │
        │   error: "message here"   │
        │ }                         │
        └────────────┬──────────────┘
                     ↓
        ┌───────────────────────────┐
        │ Frontend Shows Error UI:  │
        │ - Red background          │
        │ - Error icon (✕)          │
        │ - Error message           │
        │ - Form still visible      │
        │ - User can try again      │
        └───────────────────────────┘
```

## State Machine - Form Submission

```
              ┌──────────────────┐
              │   IDLE           │
              │ (Form loaded)    │
              └────────┬─────────┘
                       │ User clicks Submit
                       ↓
              ┌──────────────────┐
              │  VALIDATING      │
              │ (Frontend check) │
              └────────┬─────────┘
                  ↙    ↘
            Invalid    Valid
              ↙          ↘
        ┌──────────┐  ┌─────────────┐
        │ INVALID  │  │ SUBMITTING  │
        │ (Show    │  │ (Sending    │
        │ errors)  │  │  to server) │
        └──┬───────┘  └──────┬──────┘
          ↑                  │
          │         ┌────┬───┴───┬─────┐
          │      Success Error Timeout
          │         ↓      ↓      ↓
          │    ┌──────┐ ┌──────┐ ┌────────┐
          │    │SUCC- │ │FAILED│ │TIMEOUT │
          │    │ESS   │ │ (err)│ │ (err) │
          │    └──┬───┘ └──┬───┘ └───┬──┘
          │       │        │         │
          │       ↓        ↓         ↓
          │    User sees success / error UI
          │       │        │         │
          │       └────┬───┴────┬────┘
          │            │ User clicks Reset
          │            │ or 4 sec timeout
          │            ↓
          └─────────IDLE (Reset form)
```

## Database Evolution (Optional Future)

```
Current State (No Database):
┌────────────────┐      ┌──────────────┐
│ Contact Form   │──→   │ Send Email   │
│ Career Form    │      │ (that's it)  │
└────────────────┘      └──────────────┘

Future: With Database
┌────────────────┐      ┌──────────────┐      ┌──────────────┐
│ Contact Form   │──→   │ Store in DB  │──→   │ Send Email   │
│ Career Form    │      │ Log history  │      │ + Logging    │
└────────────────┘      └──────────────┘      └──────────────┘
                               ↓
                        ┌──────────────────┐
                        │ Admin Dashboard  │
                        │ - View all subs  │
                        │ - Export CSV     │
                        │ - Search/filter  │
                        └──────────────────┘
```

## Email Service Connection

```
Your App
    ↓
Nodemailer
    ↓
    ├─→ Gmail SMTP
    │   (smtp.gmail.com:587)
    │
    ├─→ Outlook SMTP
    │   (smtp-mail.outlook.com:587)
    │
    ├─→ Custom SMTP
    │   (your.server.com:587)
    │
    └─→ SendGrid API
        (api.sendgrid.com)
        
    ↓
User Inbox (or Spam)
```

This is what makes email sending possible!
