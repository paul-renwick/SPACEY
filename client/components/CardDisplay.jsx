import React from 'react'
import { connect } from 'react-redux'

import { getCards, updateCard } from '../api/cards'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class CardList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCards())
  }

  handleSubmit (e) {
    const card = this.props.cards.filter(item => 
      item.id == this.props.match.params.id
    )
    const check1Length = card[0].check1.length
    const check2Length = card[0].check2.length
    const check3Length = card[0].check3.length
    if ( check3Length === 0 && check2Length === 0 && check1Length === 0){
      this.props.dispatch(updateCard({ check1: Date.now(), id: card[0].id }))
    } else if (check3Length === 0 && check2Length === 0){
      this.props.dispatch(updateCard({ check2: Date.now(), id: card[0].id }))
    } else if (check3Length === 0) { 
      this.props.dispatch(updateCard({ check3: Date.now(), id: card[0].id }))
    } 
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
          <Button type='button' onClick={() => this.handleSubmit()}>PLACE A TICK HERE</Button>
        <Button type='button'>Return to Card list</Button>
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

