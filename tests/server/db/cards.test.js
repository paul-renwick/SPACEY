const env = require('./test-environment')
const db = require('../../../server/db/cards')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getCards returns an event given its id', () => {
  return db.getCards(, testDb)
    .then(cards => {
      expect(cards.questions).toBe('2 + 2?')
    })
    .catch(err => expect(err).toBeNull())
})