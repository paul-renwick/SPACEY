import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import AddCard from './AddCard'
import CardList from './CardList'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path='/dashboard/:id'component={CardList} />
        <Route path='/addcard' component={AddCard} />
      </Switch>
    </Router>
  )
}

export default App
