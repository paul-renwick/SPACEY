export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const ADD_CATEGORY = 'ADD_CATEGORY'

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

export const addCategory = (content) => {
  return {
    type: ADD_CATEGORY,
    content
  }
}