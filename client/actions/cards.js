export const REQUEST_CARDS = 'REQUEST_CARDS'
export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export const ADD_CARD = 'ADD_CARD'

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

export const addCard = (content) => {
  return {
    type: ADD_CARD,
    content
  }
}
