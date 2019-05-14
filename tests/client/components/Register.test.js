import React from 'react'
import { render } from 'enzyme'
 import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { MemoryRouter as Router } from 'react-router'

// import { shallow } from 'enzyme'


import Register from '../../../client/components/Register'


test('<Register />', () => {
  const register = 'test register'
  const mockStore = configureStore()({ register})
  const wrapper = render(
    <Provider store={mockStore}>
      <Router><Register /></Router>
    </Provider>
  )
  expect(wrapper.find('input').length).toBe(3)
})

