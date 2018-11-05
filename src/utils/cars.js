import { get, checkHttpStatus, parseJSON } from './fetch'

export const getCarsApi = (filterParams = null) => {
  return get('get-cars', filterParams)
    .then(checkHttpStatus)
    .then(parseJSON)
    .catch(err => err)
}

export const getSingleCarApi = (stockNumber) => {
  return get('get-car', null, stockNumber)
    .then(checkHttpStatus)
    .then(parseJSON)
    .catch(err => err)
}
