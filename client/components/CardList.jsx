
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCards } from '../api/cards'
import { Button } from 'react-bootstrap'
import Typography from '@material-ui/core/Typography'

class CardList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCards())
  }

  checkDateCreated = (card) => {
    if ((Date.now() > card.dateCreated + 60000) && (card.check1.length === 0)) {
      return <img className='check' width='50px'src='/images/exclamation.png' /> 
      
    }
    if ((Date.now() > card.check1 + 120000) && (card.check2.length === 0) && (card.check1.length !== 0)){ 
      return <img className='check' width='50px'src='/images/exclamation.png' /> 
    }
    if ((Date.now() > card.check2 + 180000) && (card.check3.length === 0) && (card.check2.length !== 0)){
      return <img className='check' width='50px'src='/images/exclamation.png' /> 
    }
    return <img className='check' width='50px' src='/images/tick.png'/>
  }

  title = this.props.categories.filter(item => 
      item.id == this.props.match.params.id)

  render () {
    return (
      <React.Fragment>
        <div className='container is-fluid has-text-centered'>
        <div className='cardList'>
{            <h1 className='title is-1'>{this.title[0].categoryName}</h1>
}            
            {this.props.cards.map(card => {
              if (card.categoryId == this.props.match.params.id) {
                return (
                  <React.Fragment>
                  <Link to={`/display/${card.id}`}
                   key={card.id}>
                  <div key={card.id} className='container has-text-centered'>
                  <Button variant="primary" size="lg" id='menuButton' block>
                  <Typography variant='h3' id='menuText2'>{card.question}{this.checkDateCreated(card)}</Typography>
                  </Button>
                  </div>
                  <br />
                  </Link>
                  </React.Fragment>
                )
              }
            })}
            <br /> <br />
            <Link to={`/addcard/${this.props.match.params.id}`}><Button size="lg">Add a new flashcard</Button></Link>
            {' '}
            <Link to={'/CategoryList'}>
            <Button size="lg">Return to subjects</Button>
            </Link>     
          </div>
        </div>
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