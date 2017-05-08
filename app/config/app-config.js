'use strict'

const env = process.env.NODE_ENV || 'development'

const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jwt-simple')

const config = require('./config')[env]
const data = require('../data')
const controllers = require('../controllers')
const configureRoutes = require('./routes')
const auth = require('./auth')(data.userData, config)

const port = process.env.PORT || config.port
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(auth.initialize())

configureRoutes(app, controllers, data, config, jwt)

function init(callback) {
  app.listen(port, callback(port))
}

module.exports.init = init
