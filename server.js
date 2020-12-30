const express = require('express')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()
const port = 3333

nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "coderoadmailer@gmail.com",
    pass: "password"
  }
})

const SUBJECT = 'Mail from CodeRoad form!'

app.get('/', (req, res) => {
  const { message, email } = req.query

  if(!message) return res.status(400).send()
  if(!email) return res.status(400).send()

  res.send( email + ' ' + SUBJECT +  ' ' + message + ' ' + process.env.SMTP_PASSWORD )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})