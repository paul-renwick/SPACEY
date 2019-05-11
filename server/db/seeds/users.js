exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'jarule', hash: '#' },
        { id: 2, username: 'pac', hash: '#' },
        { id: 3, username: 'bella hadid', hash: '#' }
      ])
    })
}
