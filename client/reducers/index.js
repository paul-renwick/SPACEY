import { combineReducers } from 'redux'
import categories from '../reducers/categories'
import cards from '../reducers/cards'

export default combineReducers({
  categories,
  cards
})
