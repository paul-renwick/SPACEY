const request = require('supertest')

jest.mock('../../../server/db/categories', () => ({
  getCategories: () => Promise.resolve([
    { id: 1, userId: 1, categoryName: 'Maths' },
    { id: 2, userId: 1, categoryName: 'Physics' },
    { id: 3, userId: 1, categoryName: 'English' },
    { id: 4, userId: 2, categoryName: 'Javascript' },
    { id: 5, userId: 2, categoryName: 'Geometry' }
])
}))

jest.mock('../../../server/db/categories', () => ({
  getCategory: (id) => Promise.resolve([
  { id: 1, userId: 1, categoryName: 'Maths' }
])
}))

const server = require('../../../server/server')

test('GET/categories returns all 5 categories', () => {
  request(server)
  .get('/categories')
  .then(res => {
    expect(res.body.categories).toHaveLength(2)
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

test('/categories/:id status', () => {
  request(server)
    .get('/categories/1')
    .expect(200)
    .then(res => {
      expect(res.body).toHaveLength()
    })
})

test('POST / add a new category', () => {
  request(server)
  .post('/categories')
  .send({name:'history', userId:2})
  .then(res => {
    expect(res.body.categories).toHaveLength(3)
  })

})


test('PUT / updates a category', () => {
const categoryName = 'history'
return request(server)
.put('/categories')
.send({userId:2, name: categoryName})
.then(res => {
  expect(res.body.categories[2].name).toBe(categoryName)
})

})
