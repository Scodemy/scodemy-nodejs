'use strict'

const MongoClient = require('mongodb').MongoClient

module.exports = (connectionString, configuredAppCb) => {
  MongoClient.connect(connectionString, (err, db) => {
    configuredAppCb(db)
  })
}
