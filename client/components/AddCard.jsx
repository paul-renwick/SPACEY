import React from 'react'
import { addNewCard } from '../api/cards'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

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
    console.log(this.props.match.params.id)
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
          <form action='submit' name='AddCard'>
            <h1 className='title is-1'>Add Card</h1>
              <input name='question'
                placeholder='question'
                value={question}
                onChange={this.handleChange}
              />
              <br /> <br />
              <input name='answer'
                placeholder='answer'
                value={answer}
                onChange={this.handleChange}
              />
              <br /> <br />
              <Button type='button' onClick={() => this.handleSubmit()}>Submit</Button>
          </form>
        </div>
        
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