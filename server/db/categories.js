const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCategories,
  submitCategories,
  getCategory,
  addCategory
}

function getCategories (db = connection) {
  return db('categories')
    .join('users', 'users.id', 'categories.userId')
    .select('categories.id', 'categories.userId', 'categories.categoryName')
}

function getCategory (id, db = connection) {
  return db('categories')
    .where('userId', id)
    .first()
}

function addCategory (newCategory, db = connection) {
  return db('categories')
    .insert(newCategory)
}

function submitCategories (submission, db = connection) {
  return db('categories')
    .where({ userId: submission.userId })
    .update({ evidence: submission.evidence, date_modified: submission.date_modified })
}
