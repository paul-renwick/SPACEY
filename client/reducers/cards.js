import {
  REQUEST_CARDS,
  RECEIVE_CARDS,
  addCard
} from '../actions/cards'

const cards = (cards = [], action) => {
  switch (action.type) {
    case REQUEST_CARDS:
      return cards

    case RECEIVE_CARDS:
      return action.cards

    default:
      return cards
  }
}

export default cards
