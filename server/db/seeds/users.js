exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, userName: 'Steve', hash: '$argon2id$v=19$m=65536,t=2,p=1$EVgHaIfx2bvz7ahqakQaog$4GmsQXltPoOqytMyCyKW3jPhjQlD2HD7fgM4BD9vQVE' },
        { id: 2, userName: 'Debra', hash: '#' },
        { id: 3, userName: 'Claire', hash: '#' }
      ])
    })
}
