'use strict'

module.exports = (app, controllers, data, config, jwt) => {
  const { homeController, authController } = controllers
  const { userData } = data

  app.get('/', homeController)

  app.post('/token', authController)
}
