const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfle')[environment]
const connection = require('knex')(config)
const { generateHash } = require('../auth/hash')

module.exports = {
  getUser,
  createUser
}

function getUser (id, db = connection) {
  return db('users')
    .where('id, id')
    .first()
}

function createUser ({ username, password }, db = connection) {
  return generateHash(password)
    .then(hash => db('users').insert({ username: username, hash }))
}
