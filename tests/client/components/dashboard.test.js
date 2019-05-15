import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from '../../../client/components/Dashboard'

Dashboard.prototype.componentDidMount = () => {}
test('test runner is working', () => {
  expect(true).toBeTruthy()
})

describe('Dashboard', () => {
  it('Dashboard should render correctly in "debug" mode', () => {
    const component = shallow(<Dashboard debug />)
    expect(component).toMatchSnapshot()
  })
})