exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, userName: 'jarule', hash: '#' },
        { id: 2, userName: 'pac', hash: '#' },
        { id: 3, userName: 'bella hadid', hash: '#' }
      ])
    })
}
