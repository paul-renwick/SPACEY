import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

import { getCards } from '../api/cards'

// import CardPreview from './CardPreview'

class CardList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCards())
  }

  render () {
    return (
      <div>
        <h1>Card Display:</h1>
        {this.props.cards.map(card => {
          if (card.id == this.props.match.params.id) {
            return <p key={card.id}>Q:{card.question}<br />A:{card.answer}</p>
          }
        })}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps)(CardList)
