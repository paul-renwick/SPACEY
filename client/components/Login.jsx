import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { signIn } from '../actions/auth'
import { clearError } from '../actions/error'
import { Button } from 'react-bootstrap'


class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    const { username, password } = this.state
    const goToDashboard = () => this.props.history.push('/categorylist')
    this.props.signIn(username, password, goToDashboard)
    e.preventDefault()
  }

  render () {
    const { username, password } = this.state
    return (
      <React.Fragment>
      
          <br/> <br/>


         <div className='container is-fluid has-text-centered' >

         <img src='images/bigBlueLogo.png' style={{width: '200px'}} />

          <h1 className='title is-1'>Login</h1>

          <form>
            <div className='Login'> 
                <input style={{ textAlign:'center', borderColor:'lightblue' }} 
                  name='username'
                  placeholder ='username'
                  value={username}
                  onChange={this.handleChange}
                />
                <br />  <br />
                <input style={{ textAlign:'center', borderColor:'lightblue' }}
                  name ='password'
                  type= 'password'
                  placeholder = 'password'
                  value={password}
                  onChange={this.handleChange}
                />
                <br />  <br />
              
                <Button type='button' onClick={this.handleSubmit}> Login </Button> 
                <Link to ='/register'>   <Button onClick={() => this.handleChange}>Register</Button></Link>
            </div>
          </form>

        </div>
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