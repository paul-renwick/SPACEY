import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { register } from '../actions/auth'
import { showError, clearError } from '../actions/error'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirm: '',
      match: false,
      showMatch: false
    }
    this.styles = {
      match: {
        color: 'red'
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const { name, value } = e.target
    let match = this.state.match
    match = name === 'password' ? value === this.state.confirm : match
    match = name === 'confirm' ? value === this.state.password : match
    this.setState({
      [name]: value,
      showMatch: this.state.showMatch || name === 'confirm',
      match: match
    })
  }

  handleSubmit (e) {
    const { register } = this.props
    const { username, password, confirm } = this.state
    register(username, password, confirm)
  }

  render () {
    const { username, password, confirm, match, showMatch } = this.state
    return (
      <React.Fragment>
        <h1>Register</h1>
        <div className='register'>
          <input name='username'
            placeholder='Username'
            value={username}
            onChange={this.handleChange}
          />
          <br /><br />
          <input name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={this.handleChange}
          />
          <br /><br />
          <input name='confirm'
            type='password' placeholder='Confirm password'
            onChange={this.handleChange} value={confirm} />

          {showMatch && !match && <span style={this.styles.match}>* Entered passwords do not match.</span>}
          <br /><br />
          <Link to ='/' ><button variant="info" type='button' onClick={() => this.handleSubmit()}>Register</button></Link>
          <Link to ='/' ><button>Return to Login</button></Link>
        </div>
      </React.Fragment>
    )
  }
}

Register.propTypes = {
  register: PropTypes.func
}

function mapDispatchToProps (dispatch) {
  return {
    register: (username, password, confirm) => {
      if (password === confirm) {
        dispatch(clearError())
        return dispatch(register({ username, password }))
      }
      dispatch(showError('Password and confirmation don\'t match'))
    }
  }
}

export default connect(null, mapDispatchToProps)(Register)
