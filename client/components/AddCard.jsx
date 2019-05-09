import React from 'react'

class AddCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault
  }

  render () {
    return (
      <React.Fragment>
        <h1>Add Card</h1>
        <input name='question'
          placeholder='question'
          value={this.state.question}
          onChange={this.handleChange}
        />
        <br /> <br />
        <input name='answer'
          placeholder='answer'
          value={this.state.answer}
          onChange={this.handleChange}
        />
        <br /> <br />

        <button type='button' onClick={() => this.handleClick()}>Submit</button>

      </React.Fragment>
    )
  }
}
export default AddCard

//     <div>
//       <form>
//         <label>
//       New Card:
//           <input type="text" name="" />
//         </label>
//         <label>
//           Add A Question:
//           <input type="text" name="" />
//         </label>
//         <label>
//           Add An Answer:
//           <input type="text" name="" />
//         </label>
//         <button>
//           Submit
//         </button>
//       </form>
//     </div>
//
//

// const mapStateToProps = state =>
//   return
//     cards: state.cards
//
//

// const mapDispatchToProps = dispatch =>
//   return
//     actions:  =>
//       dispatchrequestCards
//
//
//

// export default connect
//   mapStateToProps,
//   mapDispatchToProps
// AddCard
