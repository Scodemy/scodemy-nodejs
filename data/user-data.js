'use strict'

module.exports = (() => {
  function getAll() {
    const users = [
      {
        id: 1,
        username: 'superman',
        password: 'secret'
      },
      {
        id: 2,
        username: 'gosho',
        password: 'password'
      }
    ]

    return users
  }

  return {
    getAll
  }
})()