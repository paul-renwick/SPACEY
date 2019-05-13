const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCard,
  getCards,
  addCard,
  updateCard
}

function getCards (db = connection) {
  return db('cards')
    .join('categories', 'categories.id', 'cards.categoryId')
    .select('cards.id', 'cards.categoryId', 'cards.question', 'cards.answer', 'cards.dateCreated', 'cards.check1', 'cards.check2', 'cards.check3' )
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

function updateCard (updatedCard, db = connection) {
  return db('cards')
  .where('id', updatedCard.id)
  .update(updatedCard)
} 