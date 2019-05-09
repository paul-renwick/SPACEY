const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCard,
  getCards,
  submitCard
}

function getCards (db = connection) {
  return db('cards')
    .join('users', 'users.userId', 'cards.userId')
    .select()
}

function getCard (id, db = connection) {
  return db('cards')
    .where('userId', id)
    .first()
}

function submitCard (submission, db = connection) {
  return db('cards')
    .where({ usersId: submission.userId })
    .update({ evidence: submission.evidence, date_modified: submission.date_modified })
}
