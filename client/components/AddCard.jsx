import React from 'react'
import { connect } from 'react-redux'
import { requestCards, receiveCards } from '../actions/cards'

const AddCard = (props) => {
  return (
    <div>
      <form>
        <label>
      New Card:
          <input type="text" name="" />
        </label>
        <label>
          Add A Question:
          <input type="text" name="" />
        </label>
        <label>
          Add An Answer:
          <input type="text" name="" />
        </label>
        <button>
          Submit
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: () => {
      dispatch(requestCards())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard)
