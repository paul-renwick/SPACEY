import { combineReducers } from 'redux'
import categories from './categories'
import errorMessage from './error-message'
import cards from './cards'
import userDetails from './user-details'
import busy from './busy'

export default combineReducers({
  categories,
  cards,
  errorMessage,
  userDetails,
  busy
})
