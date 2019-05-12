import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCards } from '../api/cards'

// import CardPreview from './CardPreview'

class CardList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCards())
  }

  render () {
    return (
      <div>
        <h1>Card List:</h1>
        {this.props.cards.map(card => {
          if (card.categoryId == this.props.match.params.id) {
            return <p key={card.id}>
              <Link to={`/display/${card.id}`}>
                {card.question}
              </Link>
            </p>
          }
        })}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cards: state.cards,
    userDetails: state.userDetails
  }
}

export default connect(mapStateToProps)(CardList)
