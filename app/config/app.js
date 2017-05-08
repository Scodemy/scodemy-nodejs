'use strict'

const env = process.env.NODE_ENV || 'development'

const express = require('express')
const config = require('./config')[env]
const bodyParser = require('body-parser')
const data = require('./database')(config.connectionString)
const auth = require('./auth')(data.userData, config)
const configureRoutes = require('./routes')
const jwt = require('jwt-simple')

const port = process.env.PORT || config.port
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(auth.initialize())

configureRoutes(app, data, config, jwt)

module.exports = () => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
  }, console.log)
}
