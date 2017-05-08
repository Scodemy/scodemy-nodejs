module.exports = (app, data, config, jwt) => {
  const controllers = require('../controllers')(data, config, jwt)

  app.get('/', controllers.home.index)

  app.post('/token', controllers.auth.getToken)
}
