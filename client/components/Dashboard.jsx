import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default class Dashboard extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Link to ='/' style={{ color: 'white' }}><Button variant="info" >Logout</Button></Link>
      </React.Fragment>
    )
  }
}