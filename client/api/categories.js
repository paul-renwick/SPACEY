import request from 'superagent'
import { requestCategories, receiveCategories, addCategory } from '../actions/categories'

const categoryUrl = '/categories'

export function getCategories () {
  return (dispatch) => {
    dispatch(requestCategories())
    return request
      .get(categoryUrl)
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

export function addNewCategory (category) {
  return (dispatch) => {
    dispatch(addCategory(category))
    return request
      .post(categoryUrl)
      .send(category)
      .then(() => dispatch(getCategories()))
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err)
      })
  }
}