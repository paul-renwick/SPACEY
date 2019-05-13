const request = require('supertest')

jest.mock('../../../server/db/cards', () => ({
  getCards: () => Promise.resolve([
    { id: 1, categoryId: 1, question: '2 + 2? ', answer: '4', dateCreated: '' },
        { id: 2, categoryId: 1, question: '9 + 9?', answer: '18', dateCreated: '' },
        { id: 3, categoryId: 1, question: '2 x 2?', answer: '4', dateCreated: '' },
        { id: 4, categoryId: 2, question: 'What branch of Einstein\'s relativity deals with gravity?', answer: 'General Relativity', dateCreated: '' },
        { id: 5, categoryId: 2, question: 'How fast does light travel?', answer: '2.998×10^8 meters per second', dateCreated: '' },
        { id: 6, categoryId: 2, question: 'Does a scalar have both magnitude and direction?', answer: 'No', dateCreated: '' },
        { id: 7, categoryId: 3, question: 'Which spelling is correct: category or catagory? ', answer: 'Category', dateCreated: '' },
        { id: 8, categoryId: 3, question: 'Which is correct, alot or a lot?', answer: 'a lot', dateCreated: '' }
      ]),
  getCard: (id) => Promise.resolve(
    { id: 8, categoryId: 3, question: 'Which is correct, alot or a lot?', answer: 'a lot', dateCreated: '' }
  ),
    addCard: () => Promise.resolve([
      { id: 1, categoryId: 1, question: '2 + 2? ', answer: '4', dateCreated: '' },
      { id: 2, categoryId: 1, question: '9 + 9?', answer: '18', dateCreated: '' },
      { id: 3, categoryId: 1, question: '2 x 2?', answer: '4', dateCreated: '' },
      { id: 4, categoryId: 2, question: 'What branch of Einstein\'s relativity deals with gravity?', answer: 'General Relativity', dateCreated: '' },
      { id: 5, categoryId: 2, question: 'How fast does light travel?', answer: '2.998×10^8 meters per second', dateCreated: '' },
      { id: 6, categoryId: 2, question: 'Does a scalar have both magnitude and direction?', answer: 'No', dateCreated: '' },
      { id: 7, categoryId: 3, question: 'Which spelling is correct: category or catagory? ', answer: 'Category', dateCreated: '' },
      { id: 8, categoryId: 3, question: 'Which is correct, alot or a lot?', answer: 'a lot', dateCreated: '' }
  ]),
  submitCards: () => Promise.resolve(
    {id: 8, categoryId: 3, question: 'Which is correct, alot or a lot?', answer: 'a lot', dateCreated: '' }
  )

}))

const server = require('../../../server/server')

test('GET /cards returns all 8 cards', () => {
  return request(server)
  .get('/cards')
  .then(res => {
    expect(res.body).toHaveLength(8)
  })
})



test('/card/:id status', () => {
  return request(server)
    .get('/cards/8')
    .expect(200)
    .then(res => {
      // console.log(res.body)
      expect(res.body.question).toBe('Which is correct, alot or a lot?')
    })
})

test('POST / add a new card', () => {
  return request(server)
  .post('/cards')
  .send({question:'what is the capital of India', categoryId:2})
  .then(res => {
    expect(res.body).toHaveLength(8)
  })

})

test('PUT /:id updates a card', () => {
  const question = 'what is the capital of India'
  return request(server)
  .put('/cards/1')
  .send({categoryId:3, name: question})
  .then(res => {
    expect(res.body.notice).toBeTruthy()
  })
})
