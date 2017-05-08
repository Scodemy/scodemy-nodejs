'use strict'

function createUser() {
  console.log('user created')
}

module.exports = (mongo) => {
  console.log(mongo)
  return { createUser }
}
