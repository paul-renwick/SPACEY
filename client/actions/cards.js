export const REQUEST_CARDS = 'REQUEST_CARDS'
export const RECEIVE_CARDS = 'RECEIVE_CARDS'

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