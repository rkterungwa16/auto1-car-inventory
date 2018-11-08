import React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CarDetailsPage from '../../container/CarDetailsPage'

const state = {
  cars: { car: { modelName: 'i3' } }
}
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore(state)

jest.genMockFromModule('uniqid')
Enzyme.configure({ adapter: new Adapter() })
const { shallow } = Enzyme

const carsActions = {
  getAllCars: jest.fn()
}

const wrapper = shallow(
  <CarDetailsPage
    store={store}
    carsActions={carsActions}
  />
)
test('should render CarDetailsPage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render CarDetailsPage with alt data correctly', () => {
  wrapper.setProps({
    cars: { car: { modelName: 'car' } }
  })
  expect(wrapper).toMatchSnapshot()
})
