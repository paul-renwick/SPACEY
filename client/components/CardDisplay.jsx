import React from 'react'
import { connect } from 'react-redux'

import { getCards, updateCard } from '../api/cards'
import { Button } from 'react-bootstrap'

class CardList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCards())
  }

  handleSubmit (e) {
    const check1Length = this.props.cards.check1.length
    const check2Length = this.props.cards.check2.length
    const check3Length = this.props.cards.check3.length
    if ( check3Length === 0 && check2Length === 0 && check1Length === 0){
      updateCard(cards.check1)
    } else if (check3Length === 0 && check2Length === 0){
      updateCard(cards.check2)
    } else if (check3Length === 0) { 
      updateCard(cards.check3)
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
          <img width ='30px' src='/images/exclamation.png'></img>
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

