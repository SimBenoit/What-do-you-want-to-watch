require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const mailuser = process.env.USER_EMAIL;
const mailpass = process.env.USER_PASS;

const port = 5000;

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());


app.post('/api/contact', async (req, res) => {

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: mailuser,
      pass: mailpass,
    },
  });

  const mailOptions = {
    from: email,
    to: mailuser,
    subject: `New Contact-me message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error sending email');
  }
});

app.listen(port, () => {

  console.log(`Server is running on http://localhost:${port}`);
});
