const env = require('./test-environment')
const db = require('../../../server/db/categories')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getCategory returns an individual category', () => {
  return db.getCategory(1, testDb)
    .then(test => {
      expect(test.id).toBe(1)
    })
})