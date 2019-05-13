const request = require('supertest')

jest.mock('../../../server/db/categories', () => ({
  getCategories: () => Promise.resolve([
    { id: 1, userId: 1, categoryName: 'Maths' },
    { id: 2, userId: 1, categoryName: 'Physics' },
    { id: 3, userId: 1, categoryName: 'English' },
    { id: 4, userId: 2, categoryName: 'Javascript' },
    { id: 5, userId: 2, categoryName: 'Geometry' }
  ]),
  getCategory: (id) => Promise.resolve(
    { id: 1, userId: 1, categoryName: 'Maths' }
  ),
    addCategory: () => Promise.resolve([
    { id: 1, userId: 1, categoryName: 'Maths' },
    { id: 2, userId: 1, categoryName: 'Physics' },
    { id: 3, userId: 1, categoryName: 'English' },
    { id: 4, userId: 2, categoryName: 'Javascript' },
    { id: 5, userId: 2, categoryName: 'Geometry' }
  ]),
  submitCategories: () => Promise.resolve(
    {id: 1, userId: 2, categoryName: 'History' }
  )

}))

const server = require('../../../server/server')

test('GET /categories returns all 5 categories', () => {
  return request(server)
  .get('/categories')
  .then(res => {
    // console.log(res)
    expect(res.body).toHaveLength(5)
  })
})


test('/categories/:id status', () => {
  return request(server)
    .get('/categories/1')
    .expect(200)
    .then(res => {
      // console.log(res.body)
      expect(res.body.categoryName).toBe('Maths')
    })
})

test('POST / add a new category', () => {
  return request(server)
  .post('/categories')
  .send({name:'history', userId:2})
  .then(res => {
    expect(res.body).toHaveLength(5)
  })

})

test('PUT /:id updates a category', () => {
  const categoryName = 'History'
  return request(server)
  .put('/categories/1')
  .send({userId:2, name: categoryName})
  .then(res => {
    expect(res.body.notice).toBeTruthy()
  })
})
