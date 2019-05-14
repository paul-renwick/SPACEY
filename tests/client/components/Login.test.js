import React from 'react'
import { render } from 'enzyme'
 import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { MemoryRouter as Router } from 'react-router'

// import { shallow } from 'enzyme'


import Login from '../../../client/components/Login'


test('<Login />', () => {
  const login = 'test login'
  const mockStore = configureStore()({ login })
  const wrapper = render(
    <Provider store={mockStore}>
      <Router><Login /></Router>
    </Provider>
  )
  expect(wrapper.find('input').length).toBe(2)
})