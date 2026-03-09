const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());


// SAVE CONTACT FORM
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await pool.query(
      "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );

    res.json({ message: "Message saved successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});


// VIEW CONTACTS (optional but useful)
app.get("/contacts", async (req, res) => {

  const result = await pool.query("SELECT * FROM contacts ORDER BY id DESC");

  res.json(result.rows);

});


app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});