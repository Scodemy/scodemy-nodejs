'use strict'

const fs = require('fs')
const path = require('path')

const data = Object.create(null, {})

function convertFileNameToDataModuleName(fileName) {
  const indexOfSeparator = fileName.indexOf('-')
  const dataModuleName = fileName.substring(0, indexOfSeparator) + 'Data'
  return dataModuleName
}

fs.readdirSync('./data')
  .filter(fileName => fileName.includes('-data'))
  .forEach(fileName => {
    const dataModule = require(path.join(__dirname, fileName))
    const dataModuleName = convertFileNameToDataModuleName(fileName)
    data[dataModuleName] = dataModule
  });

module.exports = data