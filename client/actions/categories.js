export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export const requestCategories = () => {
  return {
    type: REQUEST_CATEGORIES
  }
}

export const receiveCategories = (content) => {
  return {
    type: RECEIVE_CATEGORIES,
    content
  }
}
