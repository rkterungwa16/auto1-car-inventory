import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Pagination from '../../components/Pagination'

Enzyme.configure({ adapter: new Adapter() })
const { shallow } = Enzyme
let getPageParams
let wrapper
beforeEach(() => {
  getPageParams = jest.fn()
  wrapper = shallow(
    <Pagination
      getPageParams={getPageParams}
      totalPageCount={100}
    />
  )
})
test('should render Pagination correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render Pagination with alt data correctly', () => {
  wrapper.setProps({
    totalPageCount: 5
  })
  expect(wrapper).toMatchSnapshot()
})

test('should increase the current page by 1', () => {
  const instance = wrapper.instance()
  expect(wrapper.state('currentPage')).toBe(1)
  instance.nextPage()
  expect(wrapper.state('currentPage')).toBe(2)
})

test('should decrease the current page by 1', () => {
  const instance = wrapper.instance()
  expect(wrapper.state('currentPage')).toBe(1)
  instance.nextPage()
  instance.previousPage()
  expect(wrapper.state('currentPage')).toBe(1)
})

test('should skip to the first page', () => {
  const instance = wrapper.instance()
  expect(wrapper.state('currentPage')).toBe(1)
  instance.firstPage()
  expect(wrapper.state('currentPage')).toBe(1)
})

test('should skip to the last page', () => {
  const instance = wrapper.instance()
  expect(wrapper.state('currentPage')).toBe(1)
  instance.lastPage()
  expect(wrapper.state('currentPage')).toBe(100)
})
