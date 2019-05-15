import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { MemoryRouter as Router } from 'react-router'
import Register from '../../../client/components/Register'
import { mount } from 'enzyme'

test('<Register />', () => {
  const register = 'test register'
  const mockStore = configureStore()({ register})
  const wrapper = mount(
    <Provider store={mockStore}>
      <Router><Register /></Router>
    </Provider>
  )
  expect(wrapper.find('input').length).toBe(3)
})

