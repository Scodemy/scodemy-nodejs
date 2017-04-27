'use strict'

module.exports = {
  development: {
    port: 3002,
    connectionString: 'mongodb://localhost:27017/scodemy',
    jwtSecret: 'secret',
    jwtSession: { session: false }
  },
  production: {

  }
}