'use strict'

function index(req, res) {
  res.json({
    status: 'Alive'
  })
}

function init() {
  return {
    index
  }
}

module.exports = init
