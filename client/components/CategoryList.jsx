import React from 'react'
import { connect } from 'react-redux'
import { requestCategories, receiveCategories } from '../actions/categories'

import CategoryListItem from './CategoryListItem'

const CategoryList = (props) => {
  return (
    <div>
      <h1>Categories:</h1>
      {props.categories.map(category => {
        return (
          <CategoryListItem key={category.CategoryId} name={category.CategoryName} />
        )
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

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: () => {
      dispatch(requestCategories())
      dispatch(receiveCategories())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList)
