export const REQUEST_CARDS = 'REQUEST_CARDS'
export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export const ADD_CARD = 'ADD_CARD'

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

export const addCard = (content) => {
  request('post', '/cards', card)
    .then(res => {
      const card = res.body
      dispatchEvent(addCard)
    })
}
