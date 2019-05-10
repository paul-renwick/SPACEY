import request from 'superagent'
import { requestCategories, receiveCategories, addCategory } from '../actions/categories'

export function getCategories () {
  return (dispatch) => {
    dispatch(requestCategories())
    return request
      .get('/categories')
      .then(res => {
        const newCategory = res.body
        dispatch(receiveCategories(newCategory))
      })
      .catch(err => {
      // eslint-disable-next-line no-console
        console.error(err)
      })
  }
}

export function addNewCategory () {
  return (dispatch) => {
    const category = document.getElementById('addCategory').value
    dispatch(addCategory(category))
    return request
      .post('/categories')
  }
}
