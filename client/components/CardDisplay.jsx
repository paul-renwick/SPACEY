import React from 'react'
import { connect } from 'react-redux'

import { getCards, updateCard } from '../api/cards'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import blue from '@material-ui/core/colors/blue'
import purple from '@material-ui/core/colors/purple'

const styles = {
  palette: {
    primary: blue,
    secondary: purple
  },
  card: {
    minWidth: 275,
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
};



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
          <Typography align='center' variant='h1'>Card Display:</Typography>
          
          {this.props.cards.map(card => {
            if (card.id == this.props.match.params.id) {
              return (
                <Card key={card.id} align='center' className='paper' elevation={5}>
                <Typography color='primary' variant="h1" component="h1">
                  {card.question}
                </Typography>
              </Card>
              )
            }
          })}
          <Button type='button' onClick={() => this.handleSubmit()}>Tick</Button>
        <Button type='button'>Return to Card list</Button>
        <Button variant="contained" color='primary' className={'test'}>
        Primary
      </Button>
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

{/* <article className='message is-info' key={card.id}>
<div className='message-header'>
  <p>{card.question}</p>
</div>
<div className='message-body'>
{card.answer}
</div>
</article> */}