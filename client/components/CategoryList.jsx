import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' 
import { getCategories, addNewCategory } from '../api/categories'
import { Button } from 'react-bootstrap'

//Material UI
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    maxWidth: 20,
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
}


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
          <h1 className='title is-1'>
          Categories:
          </h1>
            {categories.map(category => {
              if (category.userId === userDetails.id) {
                return <React.Fragment>
                <Link to={`/cardlist/${category.id}`}>
                <Card key={category.id} 
                align='center'
                elevation={5}>
                  <Typography variant='h3'>
                  {category.categoryName}
                  </Typography>
                </Card>
                </Link>
                <br />
                </React.Fragment>
                }
            })} 
          <br /> <br />
          <form>
            <input style={{ textAlign: 'center', borderColor: 'lightblue' }}
              name="categoryName" placeholder ='New Category' value={this.state.categoryName} onChange={this.handleChange} /> <br /> <br />
           <Button size="lg" type='button' onClick={() => this.handleSubmit()}>Add New Category</Button><br /> <br />
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

export default connect(mapStateToProps)(withStyles(styles)(CategoryList))