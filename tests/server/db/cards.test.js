const env = require('./test-environment')
const db = require('../../../server/db/cards')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getCard returns an individual card', () => {
  return db.getCard(1, testDb)
    .then(test => {
      expect(test.answer).toBe('4')
    })
})
