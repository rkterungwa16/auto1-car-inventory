import { get, checkHttpStatus, parseJSON } from './fetch'

export const getCarsApi = () => {
  return get('get-cars')
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
