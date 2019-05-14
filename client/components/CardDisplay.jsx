import React from 'react'
import { connect } from 'react-redux'
import { getCards, updateCard } from '../api/cards'
import { Link } from 'react-router-dom'

//Material UI
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import blue from '@material-ui/core/colors/blue'
import purple from '@material-ui/core/colors/purple'
import CardActions from '@material-ui/core/CardActions';

const styles = {
  palette: {
    primary: blue,
    secondary: purple
  },
  card: {
    maxWidth: 345,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}

class CardList extends React.Component {
  state = {
    display: false
  }

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

  flipper = (e) => {
    this.setState({
      display: true || false
    })
  }

  render () {
    return (
      <div className='container is-fluid has-text-centered'>
        <div className='carddisplay'>
          {this.props.cards.map(card => {
            if (card.id == this.props.match.params.id) {
              return (
              <React.Fragment>
                <Card key={card.id}
                 align='center'
                  elevation={5}>
                <Typography color='primary'
                 variant="h3"
                  component="h3">
                {this.state.display === true  ? 'Answer' : 'Question' }
                </Typography>
                <br />
                <Typography color='primary'
                 variant="h1"
                  component="h1">
                  {this.state.display === true  ? card.answer : card.question }
                </Typography>
                <CardActions>
                  <Button onClick={this.flipper}>
                  Flip
                  </Button>
                  </CardActions>
                </Card>

                <br /> 
               <div style={{ textAlign: 'center' }} >

              <Button align='center'
               variant="contained"
                color='primary'
                 size='large'
                  type='button'
                   onClick={() => this.handleSubmit()}>
                   Tick
                   </Button>

              <Link to={`/cardlist/${card.categoryId}`} key={card.id}>
              <Button size='large'
               align='center'
                variant="contained"
                 color='primary'
                  type='button'>
                  Return to Card list
                  </Button>
                  </Link>

                 </div>

              </React.Fragment>
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


export default connect(mapStateToProps)(withStyles(styles)(CardList))
