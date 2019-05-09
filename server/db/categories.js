const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCategories
}

function getCategories (db = connection) {
  return db('categories')
    .join('users', 'users.userId', 'categories.userId')
    .select('categories.categoryId', 'categories.categoryName')
}
