import nodemailer from "nodemailer";

export const sendContactMessage = async (req, res) => {
  console.log('📧 Contact form submission received:', req.body);
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,      // Gmail account as sender
    replyTo: email,                    // User email for reply
    to: process.env.EMAIL_USER,        // Your email
    subject: `Portfolio Message from ${name}`,
    text: message,
    html: `
      <h2>New Message from Portfolio Contact Form</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    res.status(500).json({ message: "Failed to send message", error: error.message });
  }
};
