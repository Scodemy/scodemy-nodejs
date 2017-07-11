'use strict'

function initGetToken(jwt, data, config) {
  return (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if (username && password) {
      const user = data.userData
        .getAll()
        .find(u => u.username === username && u.password === password)

      if (user) {
        const payload = { id: user.id }
        const token = jwt.encode(payload, config.jwtSecret)

        res.json({
          token: token
        })

        return
      }
    }

    res.sendStatus(401)
  }
}

function init(jwt, data, config) {
  return {
    getToken: initGetToken(jwt, data, config)
  }
}

module.exports = init
