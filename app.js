'use strict'

const env = process.env.NODE_ENV || 'development'
const config = require('./config/config')[env]
const port = process.env.PORT || config.port

const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jwt-simple')

const data = require('./data')

const auth = require('./config/auth')(data.userData, config)

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(auth.initialize())

app.get('/', (req, res) => {
  res.json({
    status: 'Alive'
  })
})

app.post('/token', (req, res) => {
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
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})