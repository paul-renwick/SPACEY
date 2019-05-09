import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { signIn } from '../actions/auth'
import { clearError } from '../actions/error'
import { withRouter, Link } from 'react-router-dom'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    const { username, password } = this.state
    const goToCategories = () => this.props.history.push('/dashboard')
    this.props.signIn(username, password, goToCategories)
    e.preventDefault()
}

  render () {
    const { username, password } = this.state
    return (
      <React.Fragment>
        <h1>Login</h1>
        <input name='username'
          placeholder ='username'
          value={username}
          onChange={this.handleChange}
        />
        <br />  <br />
        <input name ='password'
          type= 'password'
          placeholder = 'password'
          value={password}
          onChange={this.handleChange}
        />
        <br />  <br />

        <button type='button' onClick={() => this.handleSubmit()}> Login </button> <br />  <br />
        <Link to ='/register'>   <button onClick={() => this.handleChange()}>Register</button></Link>
      </React.Fragment>
    )
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  signIn: PropTypes.func
}

function mapDispatchToProps (dispatch) {
  return {
    signIn: (username, password, onSuccess) => {
      dispatch(clearError())
      dispatch(signIn({ username, password }, onSuccess))
    }
  }
}

export default withRouter(
  connect(null, mapDispatchToProps)(Login)
)
