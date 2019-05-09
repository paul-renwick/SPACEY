exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        { cardId: 1, categoryId: 1, question: '2 + 2? ', answer: '4', dateCreated: '' },
        { cardId: 2, categoryId: 1, question: '9+9=', answer: '44', dateCreated: '' },
        { cardId: 3, categoryId: 1, question: '89+55=', answer: '646', dateCreated: '' }
      ])
    })
}
