import {
  REQUEST_CARDS,
  RECEIVE_CARDS,
  ADD_CARD
} from '../actions/cards'

const cards = (cards = [], action) => {
  switch (action.type) {
    case REQUEST_CARDS:
      return cards

    case RECEIVE_CARDS:
      return action.cards

    case ADD_CARD:
    return [
      ...cards,
      action.content
    ]

    default:
      return cards
  }
}

export default cards
