import React from 'react'
import { connect } from 'react-redux'

import { getCategories } from '../api/categories'

class CategoryList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCategories())
  }

  render () {
    return (
      <div>
        <h1>Categories:</h1>
        <p>{this.props.categories}</p>
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

// function CategoryList (props) {
//   const { name } = props.categories
//   // const { dispatch } = props


//   return (
//     <div>
//       <h1>Categories:</h1>
//       <p>{name}</p>
//       <form>
//         <label>
//             New Category:
//           <input type="text" name="" />
//         </label>
//         <input type="submit" value="Submit New Category" />
        
//       </form>

//     </div>

//   )
// }

// export default connect()(CategoryList)
