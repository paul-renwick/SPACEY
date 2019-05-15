import React from 'react'
import { connect } from 'react-redux'
import { getCards, updateCard } from '../api/cards'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

//Material UI
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'


const styles = {
  card: {
    width: 400,
    height: 200,
    margin: 40
  },
  title: {
    fontSize: 23,
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
      display: (this.state.display === true ? false : true)
    })
  }

  render () {
    return (
      <div className='cardDisplay'>
        <div className='cardContainer'>
          {this.props.cards.map(card => {
            if (card.id == this.props.match.params.id) {
              return (
              <React.Fragment key={card.id}>
                      <Card id='cardDisplay' 
                        elevation={10}>
                      <CardHeader align='left' title={this.state.display === true  ? 'Answer' : 'Question' } >
                      </CardHeader>

                          <Typography color='primary'
                          align='center'
                          variant="h1"
                            component="h1"
                            p={10}
                            m={10}>
                            {this.state.display === true  ? card.answer : card.question }
                          </Typography>
                          <CardActions>
                          <Button id='flip' onClick={this.flipper}>
                          Flip
                          </Button>
                          </CardActions>
                      </Card>
                <br /> 
               <div style={{ textAlign: 'center' }} >

              <Button size="lg"
                   onClick={() => this.handleSubmit()}>
                   Correct
                   </Button>
                   {' '}
              <Link to={`/cardlist/${card.categoryId}`} key={card.id}>
              <Button size="lg">
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
