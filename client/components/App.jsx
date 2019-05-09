import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default App
