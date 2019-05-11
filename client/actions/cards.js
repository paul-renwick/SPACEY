import request from 'superagent'

export const REQUEST_CARDS = 'REQUEST_CARDS'
export const RECEIVE_CARDS = 'RECEIVE_CARDS'
// export const ADD_CARD = 'ADD_CARD'

export const requestCards = () => {
  return {
    type: REQUEST_CARDS
  }
}

export const receiveCards = (cards) => {
  return {
    type: RECEIVE_CARDS,
    cards
  }
}

// export const addCard = (card) => {
//   return ('post', '/cards', card)
//     .then(res => {
//       const card = res.body
//       dispatchEvent(addCard(card))
//     })
// }

export function addCard (card) {
    return request('post', '/cards', card)
  }
