const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCategories
}

function getCategories (db = connection) {
  return db('categories')
    .join('categories_id', 'user_id', 'categories_name')
    .select('categories.id', 'catogories.id', 'categories.title')
}
