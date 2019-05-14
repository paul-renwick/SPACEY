import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { MemoryRouter as Router } from 'react-router'
import Login from '../../../client/components/Login'
import { mount } from 'enzyme'

test('<Login />', () => {
  const login = 'test login'
  const mockStore = configureStore()({ login })
  const wrapper = mount(
    <Provider store={mockStore}>
      <Router><Login /></Router>
    </Provider>
  )
  expect(wrapper.find('input').length).toBe(2)
})

