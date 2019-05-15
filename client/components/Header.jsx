import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Header extends React.Component {
  displayPageName () {
  if (this.props.location.pathname === '/register' || this.props.location.pathname === '/login') {
    return 
  } else {
   return <h3>{this.props.userDetails.username}</h3>
    }
}

render () {
  return (
<React.Fragment>
  
<section className="hero is-info">
  <div className="hero-body">
    <img id='headerIcon' src='images/LittleWhiteLogo.png' style={{width: '75px'}} />
  <h3 id='headerUserName'>{this.displayPageName()}</h3>
  <br></br>
  </div>
</section>
</React.Fragment>
)
}
}

function mapStateToProps (state) {
  return {
    userDetails: state.userDetails
  }
}

export default withRouter(connect(mapStateToProps)(Header))