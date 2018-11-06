import {
  FETCH_ALL_CARS_SUCCEEDED,
  FETCH_ALL_CARS_REQUESTED,
  FETCH_ALL_CARS_FAILED,
  FETCH_SINGLE_CAR_SUCCEEDED,
  FETCH_SINGLE_CAR_REQUESTED,
  FETCH_SINGLE_CAR_FAILED,
  ADD_CAR_TO_FAVORITES_COLLECTION_REQUESTED,
  ADD_CAR_TO_FAVORITES_COLLECTION_SUCCEEDED,
  ADD_CAR_TO_FAVORITES_COLLECTION_FAILED
} from '../constants'

import { getCarsApi, getSingleCarApi } from '../utils/cars'
import { handleError } from '../utils/fetch'
import { addFavoriteCarAsync } from '../helpers'

export function getCarsRequest () {
  return {
    type: FETCH_ALL_CARS_REQUESTED
  }
}

export function getCarsSuccess (data) {
  return {
    type: FETCH_ALL_CARS_SUCCEEDED,
    payload: data
  }
}

export function getCarsFailure (error) {
  return {
    type: FETCH_ALL_CARS_FAILED,
    payload: {
      error: error
    }
  }
}

export function getAllCars (params) {
  return (dispatch) => {
    dispatch(getCarsRequest())

    return getCarsApi(params)
      .then((response) => {
        dispatch(getCarsSuccess(response))
        return true
      })
      .catch((error) => {
        dispatch(getCarsFailure(handleError(error)))
        return false
      })
  }
}

export function getSingleCarRequest () {
  return {
    type: FETCH_SINGLE_CAR_REQUESTED
  }
}

export function getSingleCarSuccess (data) {
  return {
    type: FETCH_SINGLE_CAR_SUCCEEDED,
    payload: data
  }
}

export function getSingleCarFailure (error) {
  return {
    type: FETCH_SINGLE_CAR_FAILED,
    payload: {
      error: error
    }
  }
}

export function getSingleCar (stockNumber) {
  return (dispatch) => {
    dispatch(getSingleCarRequest())

    return getSingleCarApi(stockNumber)
      .then((response) => {
        dispatch(getSingleCarSuccess(response))
        return true
      })
      .catch((error) => {
        dispatch(getSingleCarFailure(handleError(error)))
        return false
      })
  }
}
export function addFavoriteCarRequest () {
  return {
    type: ADD_CAR_TO_FAVORITES_COLLECTION_REQUESTED
  }
}

export function addFavoriteCarSuccess (data) {
  return {
    type: ADD_CAR_TO_FAVORITES_COLLECTION_SUCCEEDED,
    payload: data
  }
}

export function addFavoriteCarFailure (error) {
  return {
    type: ADD_CAR_TO_FAVORITES_COLLECTION_FAILED,
    payload: {
      error: error
    }
  }
}

export function addFavoriteCar (car) {
  return (dispatch) => {
    dispatch(addFavoriteCarRequest())

    return addFavoriteCarAsync(car)
      .then((response) => {
        dispatch(addFavoriteCarSuccess(response))
        return true
      })
      .catch((error) => {
        dispatch(addFavoriteCarFailure(handleError(error)))
        return false
      })
  }
}
