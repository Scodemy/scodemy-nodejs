const authControllerConfig = require('./auth/auth-controller')
const homeControllerConfig = require('./home/home-controller')

module.exports = (data, config, jwt) => {
  return {
    auth: authControllerConfig(jwt, data, config),
    home: homeControllerConfig()
  }
}
