import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCategories } from '../api/categories'

class CategoryList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCategories())
  }

  render () {
    return (
      <div>
        <h1>Categories:</h1>
        {this.props.categories.map(category => {
          return <p key={category.id}><Link to={`/cardlist/${category.id}`}>{category.categoryName}</Link></p>
        })}
        <form>
          <label>
            New Category:
            <input type="text" name="" />
          </label>
          <input type="submit" value="Submit New Category" />
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(CategoryList)
