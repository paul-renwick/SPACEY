const jwt = require('jsonwebtoken')

module.exports = {
  issue
}

function issue (req, res) {
  res.json({
    ok: true,
    message: 'Authentication successful.',
    userId: res.locals.id,
    token: createToken(res.locals.id)
  })
}

function createToken (id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' })
}