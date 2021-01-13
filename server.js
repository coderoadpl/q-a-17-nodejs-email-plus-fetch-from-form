const express = require('express')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()
const port = 3333

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "coderoadmailer@gmail.com",
    pass: process.env.SMTP_PASSWORD
  }
})

app.use('/', express.static('public'))

const SUBJECT = 'Mail from CodeRoad form!'

app.get('/message', (req, res) => {
  const { message, email } = req.query

  if(!message) return res.status(400).send()
  if(!email) return res.status(400).send()

  console.log('Starting to send message: ', message, email)

  transporter.sendMail(
    {
      from: "coderoadmailer@gmail.com",
      to: email,
      subject: SUBJECT,
      text: message,
    },
    (err, info) => {
      console.log('Message sent callback: ', err, info)
      if(err) return res.status(500).send()
      res.status(200).send(info)
    }
  )

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})