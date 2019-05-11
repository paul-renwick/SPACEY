import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { getCards } from '../api/cards'

// import CardPreview from './CardPreview'

class CardList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCards())
  }

  render () {
    return (
      <React.Fragment>
        <div className='container is-fluid'>
          <div className='cardList'>
            <h1 className='title is-1'>Card List:</h1>
            {this.props.cards.map(card => {
              if (card.categoryId == this.props.match.params.id) {
                return (
                
                  <Link to={`/display/${card.id}`}><Button key={card.id}>{card.question}</Button><br /><br /></Link> 
               
                )
              }              
            })}
          </div>
        </div>

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
