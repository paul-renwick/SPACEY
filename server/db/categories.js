const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCategories,
  submitCategories,
  getCategory
}

function getCategories (db = connection) {
  return db('categories')
    .join('users', 'users.userId', 'categories.userId')
    .select('categories.categoryId', 'categories.categoryName')
}

function getCategory (id, db = connection) {
  return db('categories')
    .where('userId', id)
    .first()
}

function submitCategories (submission, db = connection) {
  return db('categories')
    .where({ userId: submission.userId })
    .update({ evidence: submission.evidence, date_modified: submission.date_modified })
}
