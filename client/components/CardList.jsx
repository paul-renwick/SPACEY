import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { getCards } from '../api/cards'
import {getCategories} from '../api/categories'

class CardList extends React.Component {
  constructor (props) {
    super(props)
  this.state = {
    notification: true,
  }
}

  render () {
    return (
      <React.Fragment>
        <div className='container is-fluid has-text-centered'>
          <div className='cardList'>
            <h1 className='title is-1'>Card List:</h1>
            {this.props.cards.map(card => {
              if (card.categoryId == this.props.match.params.id) {
                return (
                  <Link to={`/display/${card.id}`} key={card.id}>
                    <article className='message is-info' key={card.id}>
                      <div className='message-header'>
                        <p>{card.question}</p>
                        <button className='date'>date to study:{card.dateCreated}</button>
                      </div>
                    </article> 
                  </Link>
                )
              }
            })}
          </div>
        </div>
        <Link to={`/addcard/${this.props.match.params.id}`}><button>Add Card</button></Link>
      </React.Fragment>
      
    )
  }
}

function mapStateToProps (state) {
  return {
    cards: state.cards,
    categories: state.categories,
    userDetails: state.userDetails
  }
}

export default connect(mapStateToProps)(CardList)

