'use strict'

const passport = require('passport')
const passportJwt = require('passport-jwt')

const ExtractJwt = passportJwt.ExtractJwt
const JwtStrategy = passportJwt.Strategy

// TODO: Delete
const users = [
  {
    id: 1,
    name: 'superman',
    password: 'secret'
  },
  {
    id: 2,
    name: 'gosho',
    password: 'password'
  }
]

module.exports = (app, config) => {
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: config.passportSecret
  }

  const strategy = JwtStrategy(jwtOptions, (payload, done) => {
    const user = users.find(x => x.id === payload.id)
    if (user)
      done(null, user)
    else
      done(null, false)
  })

  passport.use(strategy)
  app.use(passport.initialize())
}