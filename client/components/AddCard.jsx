import React from 'react'
import { addCard } from '../api/cards'
import { Button } from 'react-bootstrap'

class AddCard extends React.Component {
  constructor (props) {
    super(props)
  this.state = {
    question: '',
    answer: '',
    dateCreated: '',
    categoryId: 1
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
      categoryId: this.state.categoryId
    }
    addCard(card)
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
export default AddCard
