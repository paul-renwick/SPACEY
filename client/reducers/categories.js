import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES
} from '../actions/categories'

const categories = (categories = [], action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return categories

    case RECEIVE_CATEGORIES:
      return action.content

    default:
      return categories
  }
}

export default categories
