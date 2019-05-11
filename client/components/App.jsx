import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import AddCard from './AddCard'
import CardList from './CardList'
import CardDisplay from './CardDisplay'

const App = () => {
  return (
    <Router>
      
      <Switch>
        <Container style={{ textAlign: 'center' }}>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route path='/dashboard/:id'component={CardList} />
          <Route path='/display/:id' component={CardDisplay} />
          <Route path='/addcard' component={AddCard} />
        </Container>
      </Switch>
    </Router>
  )
}

export default App
