import React from 'react'
import { Link } from 'react-router-dom'

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

  handleClick = e => {
    e.preventDefault
  }

  render () {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <input name='username'
          placeholder ='username'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />  <br />
        <input name ='password'
          type= 'password'
          placeholder = 'password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />  <br />

        <Link to='/dashboard'><button type='button' onClick={() => this.handleClick()}> Login </button></Link> <br />  <br />
        <Link to ='/register'>   <button onClick={() => this.handleClick()}>Register</button></Link>

      </React.Fragment>
    )
  }
}

export default Login
