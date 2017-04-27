'use strict'

const env = process.env.NODE_ENV || 'development'
const config = require('./config/config')[env]

const port = process.env.PORT || config.port

const app = require('./config/express')()

require('./config/passport')(app, config)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})