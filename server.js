const express = require('express')

const app = express()
const port = 3333

const SUBJECT = 'Mail from CodeRoad form!'

app.get('/', (req, res) => {
  const { message, email } = req.query

  if(!message) return res.status(400).send()
  if(!email) return res.status(400).send()

  res.send( email + ' ' + SUBJECT +  ' ' + message )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})