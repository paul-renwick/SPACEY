exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, userName: 'Steve', hash: '#' },
        { id: 2, userName: 'Debra', hash: '#' },
        { id: 3, userName: 'Claire', hash: '#' }
      ])
    })
}
