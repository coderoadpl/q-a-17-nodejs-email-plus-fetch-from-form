const express = require('express')

const app = express()
const port = 3333

app.get('/', (req, res) => {
  res.send(req.query.message)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})