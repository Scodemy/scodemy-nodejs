const xss = require('xss')

function sanitizeObject(obj) {
    const keys = Object.keys(obj)

    for (const key of keys) {
        if (typeof obj[key] === 'string')
            obj[key] = xss(obj[key])
        else if (Array.isArray(obj[key]))
            for (let index = 0; index !== obj[key].length; index += 1)
                obj[key][index] = xss(obj[key][index])
        else if (typeof obj[key] === 'object')
            sanitizeObject(obj[key])
    }
}

function sanitize(req, _, next) {
  sanitizeObject(req.body)
  return next()
}

module.exports = sanitize
