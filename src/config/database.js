'use strict'

const MongoClient = require('mongodb').MongoClient

module.exports = (connectionString) => {
  MongoClient.connect(connectionString, (err, db) => {
    if (err)
      console.log(err)
    else
      console.log('Success')
  })
}
