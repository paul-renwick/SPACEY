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
      <div className='container is-fluid has-text-centered'>
        <div className='carddisplay'>
          <h1>Card Display:</h1>
          {this.props.cards.map(card => {
            if (card.id == this.props.match.params.id) {
              return (
                <article className='message is-info' key={card.id}>
                  <div className='message-header'>
                    <p>{card.question}</p>
                  </div>
                  <div className='message-body'>
                  {card.answer}
                  </div>
                </article>
              )
            }
          })}
        </div>
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
