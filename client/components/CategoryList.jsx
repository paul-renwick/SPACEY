import React from 'react'
import { connect } from 'react-redux'

import { getCategories, addNewCategory } from '../api/categories'

class CategoryList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCategories())
  }

  handleSubmit () {
    this.props.dispatch(addNewCategory())
  }

  render () {
    return (
      <div>
        <h1>Categories:</h1>
        {this.props.categories.map(category => {
          return <p key={category.id}>{category.categoryName}</p>
        })}
        <form>
          <label>
            New Category:
            <input id="addCategory" type="text" name="" />
          </label>
          <input type="submit" value="Submit" onClick={() => this.handleSubmit()}/>
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
