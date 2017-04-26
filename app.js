'use strict'

const env = process.env.NODE_ENV || 'development'
const config = require('./config/config')[env]

const port = process.env.PORT || config.port

const app = require('./config/express')()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})