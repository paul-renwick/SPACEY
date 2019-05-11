import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'



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
        <div className='container is-fluid' >
          <br/> <br/>
          <h1 className='title is-1'>Register</h1>
            <div className='register'>
              <input style={{ textAlign: 'center', borderColor:'lightblue' }} 
                name='username'
                placeholder='username'
                value={this.state.username}
                onChange={this.onChange}
              />
              <br /><br />
              <input style={{ textAlign: 'center', borderColor:'lightblue' }} 
                name='password'
                type='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.onChange}
              />
              <br /><br />
              <Link to ='/'><Button type='button' onClick={() => this.handleClick()}>Register</Button></Link>
            </div>
        </div>

      </React.Fragment>
    )
  }
}

export default Register
