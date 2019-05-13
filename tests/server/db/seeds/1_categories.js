exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        { id: 1, userId: 1, categoryName: 'Maths' },
        { id: 2, userId: 1, categoryName: 'Physics' },
        { id: 3, userId: 1, categoryName: 'English' },
        { id: 4, userId: 2, categoryName: 'Javascript' },
        { id: 5, userId: 2, categoryName: 'Geometry' }
      ])
    })
}
