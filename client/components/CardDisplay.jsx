import React from 'react'
import { connect } from 'react-redux'

import { getCards } from '../api/cards'


class CardList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCards())
  }

  render () {
    console.log(this.props.cards)
    return (
        <React.Fragment>
        <h1>Card Display:</h1>
        {this.props.cards.map(card => {
          if (card.id == this.props.match.params.id) {
            return <p key={card.id}>Q:{card.question}<br />A:{card.answer}</p>
          }
        })}

      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps)(CardList)

