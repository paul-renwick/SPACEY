const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCard,
  getCards,
  submitCards,
  addCard
}

function getCards (db = connection) {
  return db('cards')
    .join('categories', 'categories.id', 'cards.categoryId')
    .select('cards.id', 'cards.question', 'cards.answer')
}

function getCard (id, db = connection) {
  return db('cards')
    .where('userId', id)
    .first()
}

function addCard (newCard, db = connection) {
  return db('cards')
    .insert(newCard)
}

function submitCards (submission, db = connection) {
  return db('cards')
    .where({ usersId: submission.userId })
    .insert([{ question: submission.question }, { answer: submission.answer }])
}
