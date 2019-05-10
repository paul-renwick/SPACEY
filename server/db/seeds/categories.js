exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        { id: 1, userId: 1, categoryName: 'Maths' },
        { id: 2, userId: 1, categoryName: 'Physics' },
        { id: 3, userId: 1, categoryName: 'English' }
      ])
    })
}
