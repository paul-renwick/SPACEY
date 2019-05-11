import React from 'react'
import { addCard } from '../api/cards'

class AddCard extends React.Component {
  constructor (props) {
    super(props)
  this.state = {
    question: '',
    answer: ''
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
      answer: this.state.answer
    }
    console.log(card)
    addCard(card)
  }

  render () {
    const { question, answer } = this.state
    return (
      <React.Fragment>
        <h1>Add Card</h1>
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
        <button type='button' onClick={() => this.handleSubmit()}>Submit</button>
      </React.Fragment>
    )
  }
}
export default AddCard
