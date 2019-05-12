import React from 'react'
import { Link } from 'react-router-dom'
import CategoryList from './CategoryList'
import { Button } from 'react-bootstrap'

export default class Dashboard extends React.Component {
  render () {
    return (
      <React.Fragment>
        <CategoryList />
        {/* <Link to ='/' ><button variant="info" >Logout</button></Link> */}
      </React.Fragment>
    )
  }
}
