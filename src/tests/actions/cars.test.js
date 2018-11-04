import {
  getAllCars,
  getCarsFailure,
  getCarsRequest,
  getCarsSuccess
} from '../../actions/cars'

test('should successfully get cars', () => {
  const action = getCarsSuccess(['jeep'])
  expect(action.type).toEqual('FETCH_ALL_CARS_SUCCEEDED')
  expect(action.payload).toEqual(['jeep'])
})

test('should make request to get cars', () => {
  const action = getCarsRequest()
  expect(action.type).toEqual('FETCH_ALL_CARS_REQUESTED')
})

test('should return an error for unsuccessful request', () => {
  const action = getCarsFailure({
    error: 'error'
  })
  expect(action.type).toEqual('FETCH_ALL_CARS_FAILED')
  expect(action.payload.error.error).toEqual('error')
})
