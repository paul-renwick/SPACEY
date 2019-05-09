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
        <input type="add" value="Add New Card" />
        <input type="question" value="Add A Question" />
        <input type="answer" value="Add An Answer" />
        <button type="submit" value="Submit" />
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
