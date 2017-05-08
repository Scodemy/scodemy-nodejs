'use strict'

require('./config/app-config').init((port) => {
  return () => console.log(`Listening on ${port}`)
})
