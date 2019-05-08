exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { userId: 1, userName: 'jarule', hash: '#' },
        { userId: 2, userName: 'pac', hash: '#' },
        { userId: 3, userName: 'bella hadid', hash: '#' }
      ])
    })
}
