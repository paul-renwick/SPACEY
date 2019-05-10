import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  ADD_CATEGORY
} from '../actions/categories'

const categories = (categories = [], action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return categories

    case RECEIVE_CATEGORIES:
      return action.content

    case ADD_CATEGORY:
      return action.content

    default:
      return categories
  }
}

export default categories
