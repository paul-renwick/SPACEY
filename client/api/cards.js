import request from 'superagent'
import { requestCards, receiveCards } from '../actions/cards'

export function getCards () {
  return (dispatch) => {
    dispatch(requestCards())
    return request
      .get('/cards')
      .then(res => {
        const newCard = res.body
        dispatch(receiveCards(newCard))
      })
      .catch(err => {
      // eslint-disable-next-line no-console
        console.error(err)
      })
  }
}
