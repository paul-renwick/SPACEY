import React from 'react'
import { Link } from 'react-router-dom'

export default class Dashboard extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Link to ='/' ><button variant="info" >Logout</button></Link>
      </React.Fragment>
    )
  }
}
