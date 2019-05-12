import React from 'react'
import { connect } from 'react-redux'

import { getCards } from '../api/cards'


class CardList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCards())
  }

  render () {
    console.log(this.props.cards)
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


// const alert = (classification) => {
//   switch (classification) {
//     case 'kingdoms':
//       return 'kingdom'
//     case 'phyla':
//       return 'phylum'
//     case 'classes':
//       return 'class'
//     case 'orders':
//       return 'order'
//     case 'families':
//       return 'family'
//     case 'genera':
//       return 'genus'
//   }
// }

//Inside here, setup state of a notification for the user
//Have the state of this notifcation based on a switch statement
//Have the switch statement go through the dateCreated property of the cards field, if the dateCreated value is > 60 then 
