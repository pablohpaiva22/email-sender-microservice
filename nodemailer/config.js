import dotenv from "dotenv";
dotenv.config();
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smpt.gmail.com',
  service: 'gmail',
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})

export default transporter;