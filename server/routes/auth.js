const express = require('express')
const { createUser } = require('../db/users')
const token = require('../auth/token')

const router = express.Router()

// Register user route at /api/v1/auth/register
router.post('/register', register, token.issue)

function register (req, res, next) {
  const { username, password } = req.body
  createUser({ username, password })
    .then(([id]) => {
      res.locals.userId = id // Figure out what locals means here
      next()
    })
    .catch(({ message }) => {
      // note that message is used with SQLite, but if db is changed this may need to be updated
      if (message.includes('UNIQUE constraint failed: users.username')) {
        return res.status(400).json({
          ok: false,
          message: 'Username already exists in database.'
        })
      }
      res.status(500).json({
        ok: false,
        message: "Something bad happened. We don't know why."
      })
    })
}

module.exports = router
