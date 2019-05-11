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
        <h1>hello </h1>
        {console.log(this.props.match.params.id)}
        {console.log(this.props.cards)}
        {this.props.cards.map(card => {
          if (card.categoryId == this.props.match.params.id) {
            return <p key={card.id}>{card.question}</p>
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
