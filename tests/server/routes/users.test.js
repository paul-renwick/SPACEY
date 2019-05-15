const request = require('supertest')


jest.mock('../../../server/db/users', () => ({
  getUserById: (id) => Promise.resolve(
    { id: 1, username: 'Steve', hash: '#' }
   
  )

}))

const server = require('../../../server/server')


test('/users/:id status', () => {
  return request(server)
    .get('/api/v1/users/1')
    .expect(200)
    .then(res => {
      console.log(res.body)
      expect(res.body.username).toBe('Steve')
      expect(res.body.id).toBe(1)
    })
})