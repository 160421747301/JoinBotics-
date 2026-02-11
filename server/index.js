import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const emailsFilePath = path.join(__dirname, "emails.json");
const responsesFilePath = path.join(__dirname, "responses.json");

const app = express();
const PORT = process.env.PORT || 5000;

// Allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://joinbotics.com",
  "https://www.joinbotics.com"
];

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email Setup - Use SendGrid Web API
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Test email configuration on startup
if (process.env.SENDGRID_API_KEY) {
  console.log("✅ Email service configured successfully (SendGrid Web API)");
} else {
  console.error("❌ Email configuration error: Missing SENDGRID_API_KEY");
}

// Helper function to send emails
async function sendEmail(mailOptions) {
  try {
    const msg = {
      to: mailOptions.to,
      from: process.env.EMAIL_FROM || "noreply@joinbotics.com",
      subject: mailOptions.subject,
      html: mailOptions.html,
      text: mailOptions.text
    };
    
    console.log("📨 Sending email from:", msg.from, "to:", msg.to);
    const info = await sgMail.send(msg);
    console.log("✅ Email sent successfully");
    return { success: true, messageId: info[0].headers['x-message-id'] };
  } catch (error) {
    console.error("❌ Error sending email:", error);
    if (error.response && error.response.body) {
      console.error("📋 SendGrid error details:", error.response.body);
    }
    throw error;
  }
}

// Contact Form Endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, inquiryType, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: "Missing required fields: name, email, message" 
      });
    }

    // Get emails from JSON file
    const emailsList = readEmails();
    const recipientEmails = emailsList.contact || [];

    if (recipientEmails.length === 0) {
      return res.status(500).json({ 
        success: false, 
        error: "No recipient emails configured" 
      });
    }

    // Email to JoinBotics (all configured emails)
    const adminMailOptions = {
      from: process.env.EMAIL_FROM,
      to: recipientEmails,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Inquiry Type:</strong> ${escapeHtml(inquiryType || "Not specified")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "We received your message - JoinBotics",
      html: `
        <h2>Thank you for contacting JoinBotics!</h2>
        <p>Hi ${escapeHtml(name)},</p>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Best regards,<br>JoinBotics Team</p>
      `
    };

    // Send both emails
    await sendEmail(adminMailOptions);
    await sendEmail(userMailOptions);

    // Save response to responses.json
    const responsesList = readResponses();
    responsesList.contact.push({
      id: Date.now(),
      name,
      email,
      phone: phone || "Not provided",
      inquiryType: inquiryType || "Not specified",
      message,
      timestamp: new Date().toLocaleString()
    });
    writeResponses(responsesList);

    res.json({ 
      success: true, 
      message: "Your message has been sent successfully. Check your email for confirmation." 
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to send message. Please try again later." 
    });
  }
});

// Careers Form Endpoint
app.post("/api/careers", async (req, res) => {
  try {
    const { name, email, phone, position, location, experience, resume, coverLetter } = req.body;

    // Validation
    if (!name || !email || !phone || !position || !location) {
      return res.status(400).json({ 
        success: false, 
        error: "Missing required fields: name, email, phone, position, location" 
      });
    }

    // Get emails from JSON file
    const emailsList = readEmails();
    const recipientEmails = emailsList.careers || [];

    if (recipientEmails.length === 0) {
      return res.status(500).json({ 
        success: false, 
        error: "No recipient emails configured" 
      });
    }

    // Email to JoinBotics (all configured emails)
    const adminMailOptions = {
      from: process.env.EMAIL_FROM,
      to: recipientEmails,
      subject: `New Job Application: ${position}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Position Applied:</strong> ${escapeHtml(position)}</p>
        <p><strong>Preferred Location:</strong> ${escapeHtml(location)}</p>
        <p><strong>Experience:</strong> ${escapeHtml(experience || "Not specified")}</p>
        ${coverLetter ? `<p><strong>Cover Letter:</strong></p><p>${escapeHtml(coverLetter).replace(/\n/g, "<br>")}</p>` : ""}
        <hr>
        <p><small>Applied at: ${new Date().toLocaleString()}</small></p>
      `
    };

    // Confirmation email to applicant
    const userMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Application Received - JoinBotics",
      html: `
        <h2>Thank you for applying!</h2>
        <p>Hi ${escapeHtml(name)},</p>
        <p>We've received your application for the position of <strong>${escapeHtml(position)}</strong>.</p>
        <p>Our team will review your application and get back to you within 3-5 business days.</p>
        <hr>
        <p>Best regards,<br>JoinBotics Recruitment Team</p>
      `
    };

    // Send both emails
    await sendEmail(adminMailOptions);
    await sendEmail(userMailOptions);

    // Save response to responses.json
    const responsesList = readResponses();
    responsesList.careers.push({
      id: Date.now(),
      name,
      email,
      phone,
      position,
      location,
      experience: experience || "Not specified",
      coverLetter: coverLetter || "Not provided",
      timestamp: new Date().toLocaleString()
    });
    writeResponses(responsesList);

    res.json({ 
      success: true, 
      message: "Your application has been submitted successfully. Check your email for confirmation." 
    });
  } catch (error) {
    console.error("Careers form error:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to submit application. Please try again later." 
    });
  }
});

// Admin API Endpoints - Manage recipient emails
app.get("/api/admin/emails", (req, res) => {
  const emailsList = readEmails();
  res.json(emailsList);
});

// Admin API Endpoints - Get responses
app.get("/api/admin/responses", (req, res) => {
  const responsesList = readResponses();
  res.json(responsesList);
});

app.delete("/api/admin/responses/:type/:responseId", (req, res) => {
  try {
    const { type, responseId } = req.params;
    const id = parseInt(responseId, 10);

    if (!["contact", "careers"].includes(type)) {
      return res.status(400).json({ 
        success: false, 
        error: "Invalid type" 
      });
    }

    const responsesList = readResponses();
    const index = responsesList[type].findIndex(r => r.id === id);

    if (index === -1) {
      return res.status(404).json({ 
        success: false, 
        error: "Response not found" 
      });
    }

    responsesList[type].splice(index, 1);

    if (writeResponses(responsesList)) {
      res.json({ 
        success: true, 
        message: "Response deleted successfully"
      });
    } else {
      res.status(500).json({ 
        success: false, 
        error: "Failed to delete response" 
      });
    }
  } catch (error) {
    console.error("Error deleting response:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to delete response" 
    });
  }
});

app.post("/api/admin/emails", (req, res) => {
  try {
    const { type, email } = req.body;

    if (!type || !email) {
      return res.status(400).json({ 
        success: false, 
        error: "Missing type or email" 
      });
    }

    if (!["contact", "careers"].includes(type)) {
      return res.status(400).json({ 
        success: false, 
        error: "Invalid type. Must be 'contact' or 'careers'" 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: "Invalid email format" 
      });
    }

    const emailsList = readEmails();
    
    // Check if email already exists
    if (emailsList[type]?.includes(email)) {
      return res.status(400).json({ 
        success: false, 
        error: "Email already exists" 
      });
    }

    // Add email
    if (!emailsList[type]) {
      emailsList[type] = [];
    }
    emailsList[type].push(email);

    if (writeEmails(emailsList)) {
      res.json({ 
        success: true, 
        message: `Email added successfully`,
        emails: emailsList[type]
      });
    } else {
      res.status(500).json({ 
        success: false, 
        error: "Failed to save email" 
      });
    }
  } catch (error) {
    console.error("Error adding email:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to add email" 
    });
  }
});

app.delete("/api/admin/emails/:type/:emailIndex", (req, res) => {
  try {
    const { type, emailIndex } = req.params;
    const index = parseInt(emailIndex, 10);

    if (!["contact", "careers"].includes(type)) {
      return res.status(400).json({ 
        success: false, 
        error: "Invalid type" 
      });
    }

    const emailsList = readEmails();

    if (!emailsList[type] || !emailsList[type][index]) {
      return res.status(404).json({ 
        success: false, 
        error: "Email not found" 
      });
    }

    emailsList[type].splice(index, 1);

    if (writeEmails(emailsList)) {
      res.json({ 
        success: true, 
        message: "Email removed successfully",
        emails: emailsList[type]
      });
    } else {
      res.status(500).json({ 
        success: false, 
        error: "Failed to remove email" 
      });
    }
  } catch (error) {
    console.error("Error removing email:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to remove email" 
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  const emailsList = readEmails();
  console.log(`📧 Contact emails: ${emailsList.contact?.join(", ") || "None configured"}`);
  console.log(`📧 Career emails: ${emailsList.careers?.join(", ") || "None configured"}`);
});

// Helper function to escape HTML
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Helper function to read emails from JSON
function readEmails() {
  try {
    const data = fs.readFileSync(emailsFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading emails file:", error);
    return { contact: [], careers: [] };
  }
}

// Helper function to write emails to JSON
function writeEmails(data) {
  try {
    fs.writeFileSync(emailsFilePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error("Error writing emails file:", error);
    return false;
  }
}

// Helper function to read responses from JSON
function readResponses() {
  try {
    const data = fs.readFileSync(responsesFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading responses file:", error);
    return { contact: [], careers: [] };
  }
}

// Helper function to write responses to JSON
function writeResponses(data) {
  try {
    fs.writeFileSync(responsesFilePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error("Error writing responses file:", error);
    return false;
  }
}
