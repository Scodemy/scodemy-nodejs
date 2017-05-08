'use strict'

const passport = require('passport')
const passportJwt = require('passport-jwt')

const ExtractJwt = passportJwt.ExtractJwt
const JwtStrategy = passportJwt.Strategy

function init(userData, config) {
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: config.jwtSecret
  }

  const strategy = new JwtStrategy(jwtOptions, (payload, done) => {
    const user = userData.find(u => u.id === payload.id)
    if (user)
      done(null, user)
    else
      done(new Error('User not found'), false)
  })

  passport.use(strategy)

  return {
    initialize: () => {
      return passport.initialize()
    },
    authenticate: () => {
      return passport.authenticate('jwt', config.jwtSession)
    }
  }
}

module.exports = init
