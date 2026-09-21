const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.status(200).send("App is working");
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

app.post("/", async (req, res, next) => {
  const { name, email, message } = req.body;

  await transporter.sendMail({
    from: email,
    to: process.env.CONTACT_EMAIL || "feranmioladele04@gmail.com",
    subject: `Message from ${name}`,
    text: message,
  });

  res.status(200).send("Message sent");
});

app.listen(3001, () => {
  console.log("Server is running");
});
