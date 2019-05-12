import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { getCards } from '../api/cards'

class CardList extends React.Component {
  constructor (props) {
    super(props)
  this.state = {
    notification: true,
  }
}

  componentDidMount () {
    this.props.dispatch(getCards())
  }


  notifier = () => {
    {if (this.state.notification === true) {
      return <p> 'Requires attention' </p>
    } else {
      return <p> All good</p>
    }
  }
  }

  checkDateCreated = () => {
  switch (date) {
    case  (Date.now() > date + 60):
      return this.setState.notifcation === true
    case (Date.now() > date + 120):
      return this.setState.notifcation === true
    default:
      return this.setState.notification === false
  }
}

{this.checkDateCreated(card.dateCreated)}
{this.notifier()}


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
        <Link to='/addCard'><button>Add Card</button></Link>
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

//Have the state of this notifcation based on a switch statement
//Have the switch statement go through the dateCreated property of the cards field, if the dateCreated value is > 60 then 