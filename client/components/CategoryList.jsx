import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCategories, addCategory } from '../api/categories'

class CategoryList extends React.Component {
  constructor (props) {
    super(props)
  this.state = {
    categoryName: ''
  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}

  componentDidMount () {
    this.props.dispatch(getCategories())
    console.log(this.props.userDetails)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    const newCategory = {
      categoryName: this.state.categoryName,
    }
    addCategory(newCategory)
  }

  render () {
    const { categories, userDetails} = this.props
    return (
      <React.Fragment>
          {console.log(userDetails)}
        <h1>Categories:</h1>
        {categories.map(category => {
          if (category.userId === userDetails.id) {
          return <p key={category.id}><Link to={`/cardlist/${category.id}`}>{category.categoryName}</Link></p>
          }
        })}
        <form>
          <label>
            New Category:
            <input name='categoryName'
          placeholder='New Category'
          value={this.state.categoryName}
          onChange={this.handleChange}
        />
          </label>
          <button type='button' onClick={() => this.handleSubmit()}>Add New Category</button>
        </form>
        </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    userDetails: state.userDetails,
    categories: state.categories
  }
}


export default connect(mapStateToProps)(CategoryList)