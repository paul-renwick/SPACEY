import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' 
import { getCategories, addNewCategory } from '../api/categories'
import { Button } from 'react-bootstrap'

class CategoryList extends React.Component {
  constructor (props) {
    super(props)
  this.state = {
    categoryName: '',
    userId: ''
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
      userId: this.props.userDetails.id
    }
    this.props.dispatch(addNewCategory(newCategory))
  }

  render () {
    const { categories, userDetails} = this.props
    return (
      <React.Fragment>
        <div className='container is-fluid has-text-centered'>
          <h1 className='title is-1'>Categories:</h1>
            {categories.map(category => {
              if (category.userId === userDetails.id) {
                return <p key={category.id}><Link to={`/cardlist/${category.id}`}>{category.categoryName}</Link></p>
                }
            })} 
          <br /> <br />
          <form>
            <input style={{ textAlign: 'center', borderColor: 'lightblue' }}
              name="categoryName" placeholder ='New Category' value={this.state.categoryName} onChange={this.handleChange} /> <br /> <br />
           <Button type='button' onClick={() => this.handleSubmit()}>Add New Category</Button><br /> <br />
          </form>
        </div>
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