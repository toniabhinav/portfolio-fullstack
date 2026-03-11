require('dotenv').config(); // Loads environment variables
const express = require("express");
const { Resend } = require('resend');
const cors = require("cors");
const pool = require("./db");
const { sendEmail } = require("./utils/sendEmail");
const app = express();

app.use(cors());
app.use(express.json());

// Initialize Resend using your API key from .env or Render
const resend = new Resend(process.env.RESEND_API_KEY);

// SAVE CONTACT FORM & SEND EMAIL
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1. Save to Database
    await pool.query(
      "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );

    // 2. Send Email Notification
    await sendEmail(name, email, message);

    res.json({ message: "Message saved and email sent successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// VIEW CONTACTS
app.get("/contacts", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM contacts ORDER BY id DESC"
    );

    res.json(result.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});