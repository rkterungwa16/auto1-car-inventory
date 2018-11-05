import {
  getAllColors,
  getColorsFailure,
  getColorsSuccess,
  getColorsRequest
} from '../../actions/colors'

test('should successfully get colors', () => {
  const action = getColorsSuccess(['yellow'])
  expect(action.type).toEqual('FETCH_ALL_COLORS_SUCCEEDED')
  expect(action.payload).toEqual(['yellow'])
})

test('should make request to get colors', () => {
  const action = getColorsRequest()
  expect(action.type).toEqual('FETCH_ALL_COLORS_REQUESTED')
})

test('should return an error for unsuccessful request', () => {
  const action = getColorsFailure({
    error: 'error'
  })
  expect(action.type).toEqual('FETCH_ALL_COLORS_FAILED')
  expect(action.payload.error.error).toEqual('error')
})
