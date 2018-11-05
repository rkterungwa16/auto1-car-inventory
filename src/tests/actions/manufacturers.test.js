import {
  getAllColors,
  getManufacturersFailure,
  getManufacturersSuccess,
  getManufacturersRequest
} from '../../actions/manufacturers'

test('should successfully get manufacturers', () => {
  const action = getManufacturersSuccess(['porsche'])
  expect(action.type).toEqual('FETCH_ALL_MANUFACTURERS_SUCCEEDED')
  expect(action.payload).toEqual(['porsche'])
})

test('should make request to get manufacturers', () => {
  const action = getManufacturersRequest()
  expect(action.type).toEqual('FETCH_ALL_MANUFACTURERS_REQUESTED')
})

test('should return an error for unsuccessful request', () => {
  const action = getManufacturersFailure({
    error: 'error'
  })
  expect(action.type).toEqual('FETCH_ALL_MANUFACTURERS_FAILED')
  expect(action.payload.error.error).toEqual('error')
})
