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
      <h1 className='title is-1'>SPACEY</h1>
         <img src='images/bigBlueLogo.png' style={{width: '250px'}} />
          <h2 className='title is-2 has-text-black'>Login</h2>
          <form>
            <div className='Login'> 
                <input style={{ textAlign:'center', borderColor:'lightblue' }} 
                  name='username'
                  placeholder ='Username'
                  value={username}
                  onChange={this.handleChange}
                />
                <br />  <br />
                <input style={{ textAlign:'center', borderColor:'lightblue' }}
                  name ='password'
                  type= 'password'
                  placeholder = 'Password'
                  value={password}
                  onChange={this.handleChange}
                />
                <br />  <br />
                <Button size="lg" type='button' onClick={this.handleSubmit}> Login </Button> 
                <Link to ='/register'>   <Button size="lg" onClick={() => this.handleChange}>Register</Button></Link>
            </div>
          </form>
        </div>
        <br /><br /><br /><br />
        <section className='hero'>
        

          <div className='hero-body has-background-grey-lighter' id="blurb">
          <br />
            <div className='container'>
                <h1 className='title'>What is <em>SPACEY?</em></h1>
                <h2 className='subtitle'>
                  <p>Welcome to SPACEY the world leader in spaced repition learning! What is spaced repition learning, you may ask? The spacing effect is a far more effective way to learn and retain information that works with our brain instead of against it.</p>
                  <p>With properly spaced repetition, you increase the intervals of time between learning attempts. Each learning attempt reinforces the neural connections. For example, we learn a list better if we repeatedly study it over a period of time than if we tackle it in one single burst. We’re actually more efficient this way. Spaced sessions allow us to invest less total time to memorize than one single session, whereas we might get bored while going over the same material again and again in a single session. Of course, when we’re bored we pay less and less attention.</p>
                  <p>
                  The difficulty of spaced repetition is not effort but that it requires forward planning and a small investment of time to set up a system. But in the long run, it saves us time as we retain information and spend less total time learning.
                  </p>
                  <p><Link to='/register'>Register for an account now</Link></p>
                  <p>Scientific background: <a href='https://fs.blog/2018/12/spacing-effect/' target='_blank' rel="noopener noreferrer">the spacing effect</a></p>
                </h2>
            </div>
            
          </div>
        </section>
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