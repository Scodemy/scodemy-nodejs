'use strict'

const fs = require('fs')
const path = require('path')

const data = Object.create(null, {})

function convertFileName(fileName) {
  const indexOfSeparator = fileName.indexOf('-')
  const dataModuleName = fileName.substring(0, indexOfSeparator) + 'Data'
  return dataModuleName
}

function init(db) {
  fs.readdirSync(__dirname)
    .filter(fileName => fileName.includes('-data'))
    .forEach(fileName => {
      const dataModule = require(path.join(__dirname, fileName))
      const dataModuleName = convertFileName(fileName)
      data[dataModuleName] = dataModule(db)
    });

  return data
}

module.exports = init
