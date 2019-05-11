import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' 
import { getCategories } from '../api/categories'
import { Button } from 'react-bootstrap'

class CategoryList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCategories())
  }

  render () {
    return (
      <React.Fragment>
        <div className='container is-fluid'>

          <h1 className='title is-1'>Categories:</h1>

            {this.props.categories.map(category => {

              return (
                <Link to ={`/cardlist/${category.id}`}><Button key={category.id}>{category.categoryName}</Button><a> </a></Link>
              )
            })} 
          <br /> <br />
          <form>
            <input style={{ textAlign: 'center', borderColor: 'lightblue' }}
              type="text" name="newCategory" placeholder ='New Category' /> <br /> <br />
            <input type="submit" value="Submit New Category" /> <br /> <br />
          </form>

        </div>
      </React.Fragment>
      
    ) 
  }
}

function mapStateToProps (state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(CategoryList)
