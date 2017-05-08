module.exports = (jwt, data, config) => {
  function getToken(req, res) {
    const username = req.body.username
    const password = req.body.password

    if (username && password) {
      const user = data.userData
        .getAll()
        .find(u => u.username === username && u.password === password)

      if (user) {
        const payload = { id: user.id }
        const token = jwt.encode(payload, config.jwtSecret);

        res.json({
          token: token
        });

        return
      }
    }

    res.sendStatus(401);
  }

  return { getToken }
}
