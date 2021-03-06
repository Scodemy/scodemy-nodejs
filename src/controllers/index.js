'use strict'

const fs = require('fs')
const path = require('path')

const CONTROLLERS_SUFFIX = '-controller'

const controllers = Object.create(null, {})

function convertFileName(fileName) {
  const indexOfSeparator = fileName.indexOf('-')
  const controllerModuleName = fileName.substring(0, indexOfSeparator) + 'Controller'
  return controllerModuleName
}

; (function loadControllers(currentDir) {
  currentDir = currentDir || __dirname
  fs.readdirSync(currentDir)
    .forEach(node => {
      const currentNodePath = path.join(currentDir, node)
      if (fs.lstatSync(currentNodePath).isDirectory())
        loadControllers(currentNodePath)
      else if (fs.lstatSync(currentNodePath).isFile &&
               currentNodePath.includes(CONTROLLERS_SUFFIX)) {
        const controllerModule = require(path.join(currentDir, node))
        const controllerModuleName = convertFileName(node)
        controllers[controllerModuleName] = controllerModule
      }
    })
}())

module.exports = controllers
