exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        { categoryId: 1, userId: 1, categoryName: 'Math' },
        { categoryId: 2, userId: 1, categoryName: 'Physics' },
        { categoryId: 3, userId: 1, categoryName: 'English' }
      ])
    })
}
