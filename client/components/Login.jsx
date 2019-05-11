import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'



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

  handleClick = (e) => {
    e.preventDefault
  }

  render () {
    return (
      <React.Fragment>
        <div className='container is-fluid' >
          <br/> <br/>
          <h1 className='title is-1'>Login</h1>
            <div className='Login'style={{textAlign:'center'}}> 
              <input style={{ textAlign:'center', borderColor:'lightblue' }} 
                name='username'
                placeholder ='username'
                value={this.state.username}
                onChange={this.handleChange}
              />
              <br />  <br />
              <input style={{ textAlign:'center', borderColor:'lightblue' }}
                name ='password'
                type= 'password'
                placeholder = 'password'
                value={this.state.password}
                onChange={this.handleChange}
              />
              <br />  <br />
             
                <Link to='/dashboard'><Button btn-space type='button' onClick={() => this.handleClick()}> Login </Button></Link> 
                <a> </a>
                <Link to ='/register'><Button  onClick={() => this.handleClick()}>Register</Button></Link>
         
            </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Login
