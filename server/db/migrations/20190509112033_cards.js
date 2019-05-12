exports.up = (knex, Promise) => {
  return knex.schema.createTable('cards', (table) => {
    table.increments('id').primary()
    table.integer('categoryId')
    table.string('question')
    table.string('answer')
    table.integer('dateCreated')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('cards')
}
