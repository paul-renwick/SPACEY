import { combineReducers } from 'redux'
import categories from '../reducers/categories'
import errorMessage from './error-message'
import cards from './cards'

export default combineReducers({
  categories,
  cards,
  errorMessage
})
