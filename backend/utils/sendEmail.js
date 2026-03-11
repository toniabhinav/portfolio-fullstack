const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(name, email, message) {
  await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "abhinavkumartk48@gmail.com",   // put correct email
    subject: "New Portfolio Contact Form Submission",
    html: `
      <h3>New Contact Form Submission</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${message}</p>
    `
  });
}

module.exports = { sendEmail };