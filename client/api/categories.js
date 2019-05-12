import request from 'superagent'
import { requestCategories, receiveCategories } from '../actions/categories'

const categoryUrl = '/categories'

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

export function addCategory (category) {
  return request
    .post(categoryUrl)
    .send(category)
    .end((err, res) => {
      (err)
    })
}