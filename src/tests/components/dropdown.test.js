import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Dropdown from '../../components/Dropdown'

jest.genMockFromModule('uniqid')
Enzyme.configure({ adapter: new Adapter() })
const { shallow } = Enzyme

const getFilterParams = jest.fn()
const wrapper = shallow(
  <Dropdown
    dropdownContent={['content']}
    defaultDropdownTitle={{ title: 'title' }}
    getFilterParams={getFilterParams}
  />
)
test('should render Dropdown correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render Dropdown with alt data correctly', () => {
  wrapper.setProps({
    dropdownContent: ['another content'],
    defaultDropdownTitle: { title: 'another title' }
  })
  expect(wrapper).toMatchSnapshot()
})
test('should toggle open a dropdown menu', () => {
  const instance = wrapper.instance()
  expect(wrapper.state('dropdownIsOpen')).toBe(false)
  instance.toggleList()
  expect(wrapper.state('dropdownIsOpen')).toBe(true)
})

test('should format dropdown input data', () => {
  const instance = wrapper.instance()
  expect(instance.formatData(['value'])[0].title).toBe('value')
})

test('should select option', () => {
  wrapper.setProps({
    dropdownContent: ['title'],
    defaultDropdownTitle: { title: 'title' }
  })
  const instance = wrapper.instance()
  expect(wrapper.state('selectedOption')[0].title).toBe('title')
  instance.selectOption(0)
  expect(wrapper.state('selectedOption')[0].title).toBe('title')
})

test('should call filterParams method on selecting filter parameter', () => {
  wrapper.setProps({
    dropdownContent: ['car'],
    defaultDropdownTitle: { title: 'title' }
  })
  const instance = wrapper.instance()
  instance.fireChangeEvent('title')
  expect(getFilterParams).toHaveBeenCalled()
})

test('should render dropdown content', () => {
  const instance = wrapper.instance()
  const renderedDropdown = instance.renderDropdownContents([
    { id: 1, title: 'title', selected: false
    }])
  expect(typeof renderedDropdown).toBe('object')
})
