import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Pagination from '../../components/Pagination'

Enzyme.configure({ adapter: new Adapter() })
const { shallow } = Enzyme

const getPageParams = jest.fn()
const wrapper = shallow(
  <Pagination
    getPageParams={getPageParams}
    totalPageCount={100}
  />
)
test('should render Pagination correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render Pagination with alt data correctly', () => {
  wrapper.setProps({
    totalPageCount: 5
  })
  expect(wrapper).toMatchSnapshot()
})
