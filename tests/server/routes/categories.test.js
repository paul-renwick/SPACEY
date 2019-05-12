const request = require('supertest')

const server = require('../../../server/server')
const db = require('../../../server/db/categories')

// jest.mock('../../../server/db/categories')

// beforeEach(() => {
//   db.reset()
//   jest.resetModules()
// })

test('GET/categories returns all 5 categories', () => {
  request(server)
  .get('/categories')
  .then(res => {
    expect(res.body).toHaveLength(5)
  })
})

// test('GET /categories sends back a 500 on db error', () => {
//   db.getCategories = () => Promise.reject(new Error('database error'))

//   return request(server)
//     .get('/categories')
//     .then(res => {
//       expect(res.status).toBe(500)
//     })
// })



test('/category/:id sends back a 200 status', (req, res) => {
  request(server)
  .get('category/:id')
  .expect(200)
  .then(res => {
    expect(res.body.name).toHaveLength()
  })
})



test('/categories/:id sends back a 200 status', () => {
  request(server)
    .get('/categories/:id')
    .expect(200)
    .then(res => {
      expect(res.body.name).toHaveLength()
    })
})