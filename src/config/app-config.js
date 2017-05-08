'use strict'

const env = process.env.NODE_ENV || 'development'

const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jwt-simple')
const helmet = require('helmet')
const sanitize = require('../middlewares/sanitizer')

const config = require('./config')[env]
const initData = require('../data')
const controllers = require('../controllers')
const configureRoutes = require('./routes')
const initAuth = require('./auth')
const initDatabase = require('./database')

const port = process.env.PORT || config.port
const app = express()

function configApp(db) {
  const data = initData(db)
  const auth = initAuth(data, config)

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(helmet())
  app.use(sanitize)
  app.use(auth.initialize())

  configureRoutes(app, controllers, data, config, jwt)

  app.listen(port, () => {
    console.log(`App is running on ${port}`)
  })
}

function init() {
  initDatabase(config.connectionString, configApp)
}

module.exports = init
