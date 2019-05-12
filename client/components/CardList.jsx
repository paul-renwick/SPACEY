import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCards } from '../api/cards'

// import CardPreview from './CardPreview'

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
              {this.checkDateCreated(card.dateCreated)}
              {this.notifier()}
            </p>
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

//Have the state of this notifcation based on a switch statement
//Have the switch statement go through the dateCreated property of the cards field, if the dateCreated value is > 60 then 