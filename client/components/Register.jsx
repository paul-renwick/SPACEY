import React from 'react'
import { Link } from 'react-router-dom'

class Register extends React.Component {
  state = {
    username: '',
    password: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
}

  handleClick = () => {
  // register button should link to register path
}


  render () {
    return (
      <React.Fragment>
        <h1>Register</h1>
          <div className='register'>
            <input name='username'
              placeholder='username'
              value={this.state.username}
              onChange={this.onChange}
            />
            <br /><br />
            <input name='password'
              type='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.onChange}
            />
            <br /><br />
            <Link to ='/' ><button variant="info" type='button' onClick={() => this.handleClick()}>Register</button></Link>
          </div>
        
      </React.Fragment>
    )
  }

}

export default Register