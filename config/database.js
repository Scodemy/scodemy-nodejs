'use strict'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

function init(config) {
  mongoose.connect(config.connectionString, (err) => {
    if (err) {
      console.log(err)
      // TODO: Log to logger
    }
  })

  const database = mongoose.connection

  database.once('open', (err) => {
    if (err) {
      console.log(err)
      // TODO: Log to logger
    }
  })

  database.on('error', (err) => {
    console.log(err)
    // TODO: Log to logger
  })
}

module.exports = init