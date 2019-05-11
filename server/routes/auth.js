const express = require('express')
const {
  userExists,
  getUserByName,
  createUser } = require('../db/users')
const hash = require('../auth/hash')
const token = require('../auth/token')

const router = express.Router()

// Register user route at /api/v1/auth/register
router.post('/register', register, token.issue)
router.post('/signin', signIn, token.issue)

function register (req, res, next) {
  userExists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({
          errorType: 'USERNAME_UNAVAILABLE'
        })
      }
      createUser(req.body.username, req.body.password)
        .then(() => next())
    })
    .catch((err) => {
      res.status(400).send({
        errorType: err.message
      })
    })
}
// "DATABASE_ERROR"

function signIn (req, res, next) {
  getUserByName(req.body.username)
    .then(user => {
      return user || invalidCredentials(res)
    })
    .then(user => {
      return user && hash.verify(user.hash, req.body.password)
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res)
    })
    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function invalidCredentials (res) {
  res.status(400).send({
    errorType: 'INVALID_CREDENTIALS'
  })
}

module.exports = router
