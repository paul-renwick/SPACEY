exports.up = (knex, Promise) => {
  return knex.schema.createTable('cards', (table) => {
    table.increments('cardId').primary()
    table.integer('categoryId')
    table.string('question')
    table.string('answer')
    table.string('dateCreated')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('cards')
}
