exports.up = (knex, Promise) => {
  return knex.schema.createTable('categories', (table) => {
    table.increments('categoryId').primary()
    // table.increments('col')
    table.integer('userId')
    table.string('categoryName')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('categories')
}
