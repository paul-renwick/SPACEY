import request from 'superagent'
import { requestCategories, receiveCategories } from '../actions/categories'

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
