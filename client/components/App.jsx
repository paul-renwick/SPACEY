import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import AddCard from './AddCard'
import CardList from './CardList'
import CardDisplay from './CardDisplay'
import Header from './Header'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/categorylist/' component={Dashboard} />
          <Route path='/cardlist/:id'component={CardList} />
          <Route path='/display/:id' component={CardDisplay} />
          <Route path='/addcard/:id' component={AddCard} />
      </Switch>
    </Router>
  )
}

export default App
