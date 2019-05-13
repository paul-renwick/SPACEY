import request from 'superagent'
import { requestCards, receiveCards, addCard } from '../actions/cards'

const cardUrl = '/cards'

export function getCards () {
  return (dispatch) => {
    dispatch(requestCards())
    return request
      .get(cardUrl)
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

export function updateCard (card) {
  return request
  .put(`/cards/${card.id}`) 
  .send(card)
  .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
    })
}

export function addNewCard (card) {
  return (dispatch) => {
    dispatch(addCard(card))
    return request
      .post(cardUrl)
      .send(card)
      .then(() => dispatch(getCards()))
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err)
      })
  }
}
