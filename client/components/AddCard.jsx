import React from 'react'
import { addNewCard } from '../api/cards'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class AddCard extends React.Component {
  constructor (props) {
    super(props)
  this.state = {
    question: '',
    answer: '',
    dateCreated: '',
    categoryId: ''
  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit (e) {
    const card = {
      question: this.state.question,
      answer: this.state.answer,
      dateCreated: Date.now(),
      categoryId: this.props.match.params.id,
      check1: '',
      check2: '',
      check3: ''
    }
    this.props.dispatch(addNewCard(card))
  }

  render () {
    const { question, answer } = this.state
    return (
      <React.Fragment>
        <div className='container is-fluid has-text-centered'>
          <br />
            <form action='submit' name='AddCard'>
              <h1 className='title is-1'>Add New Flash Card</h1>
                <input style={{ textAlign:'center', borderColor:'lightblue' }}
                  name='question'
                  placeholder='Question'
                  value={question}
                  onChange={this.handleChange}
                />
                <br /> <br />
                <input style={{ textAlign:'center', borderColor:'lightblue' }}
                  name='answer'
                  placeholder='Answer'
                  value={answer}
                  onChange={this.handleChange}
                />
                <br /> <br />
                <Button size="lg" type='button' onClick={() => this.handleSubmit()}>Submit</Button>{' '}
                {''}<Link to={`/cardlist/${this.props.match.params.id}`} ><Button size="lg" type='button'>Return to card list</Button></Link>
            </form>
        </div>
        <br />
        <section className='hero'>
        <div className='hero-body has-background-grey-lighter' id="blurb">
          <br />
            <div className='container'>
                <h2 className='subtitle'>
                  <p>Flash cards are one of the classic study tools, and for good reason – they promote studying through active recall, which is one of the practices through which our brains learn most effectively.</p>
                  <p><b><em>SPACEY</em></b> uses your self-reported confidence in each flashcard to determine how frequently to repeat it. This optimizes the interval between each flashcard's repetition, thus maximizing the amount of knowledge that you can learn (or solidify) given a fixed amount of study time.</p>
                </h2>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    cards: state.cards,
    userDetails: state.userDetails,
    categories: state.categories
  }
}

export default connect(mapStateToProps)(AddCard)