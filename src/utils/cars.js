import { get, checkHttpStatus, parseJSON } from './fetch'

export const getCarsApi = (filterParams = null) => {
  return get('get-cars', filterParams)
    .then(checkHttpStatus)
    .then(parseJSON)
    .catch(err => err)
}

export const getCarApi = () => {
  return get('get-car')
    .then(checkHttpStatus)
    .then(parseJSON)
    .catch(err => err)
}
