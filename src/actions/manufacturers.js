import {
  FETCH_ALL_MANUFACTURERS_SUCCEEDED,
  FETCH_ALL_MANUFACTURERS_REQUESTED,
  FETCH_ALL_MANUFACTURERS_FAILED
} from '../constants'

import { getManufacturersApi } from '../utils/manufacturers'
import { handleError } from '../utils/fetch'

export function getManufacturersRequest () {
  return {
    type: FETCH_ALL_MANUFACTURERS_REQUESTED
  }
}

export function getManufacturersSuccess (data) {
  return {
    type: FETCH_ALL_MANUFACTURERS_SUCCEEDED,
    payload: data
  }
}

export function getManufacturersFailure (error) {
  return {
    type: FETCH_ALL_MANUFACTURERS_FAILED,
    payload: {
      error: error
    }
  }
}

export function getAllManufacturers () {
  return (dispatch) => {
    dispatch(getManufacturersRequest())

    return getManufacturersApi()
      .then((response) => {
        dispatch(getManufacturersSuccess(response))
        return true
      })
      .catch((error) => {
        dispatch(getManufacturersFailure(handleError(error)))
        return false
      })
  }
}
