import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'



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

  render () {
    const { username, password, confirm, showMatch, match } = this.state
    return (
      <React.Fragment>
        <div className='container is-fluid' >
          <br/> <br/>
          <h1 className='title is-1'>Register</h1>
            <div className='register'>
              <input style={{ textAlign: 'center', borderColor:'lightblue' }} 
                name='username'
                placeholder='Username'
                value={username}
                onChange={this.handleChange}
              />
              <br /><br />
              <input style={{ textAlign: 'center', borderColor:'lightblue' }} 
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={this.handleChange}
              />
              <br /><br />
              <input style={{ textAlign: 'center', borderColor:'lightblue' }}  
                name='confirm'
                type='password' placeholder='Confirm password'
                onChange={this.handleChange} value={confirm} />

                {showMatch && !match && <span style={this.styles.match}>* Entered passwords do not match.</span>}
              <br /><br />
              <Link to ='/' ><Button type='button' onClick={this.handleSubmit}>Register</Button></Link>
              <a> </a>
              <Link to ='/' ><Button>Return to Login</Button></Link>
          </div>
        </div>
      </React.Fragment>
    )
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
    e.preventDefault()
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
