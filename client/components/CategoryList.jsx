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
    const { categories } = this.props
    return (
      <React.Fragment>
        <h1>Categories:</h1>
        {categories.map(category => {
          return <p key={category.id}><Link to={`/cardlist/${category.id}`}>{category.categoryName}</Link></p>
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
    categories: state.categories,
    userDetails: state.userDetails
  }
}

export default connect(mapStateToProps)(CategoryList)