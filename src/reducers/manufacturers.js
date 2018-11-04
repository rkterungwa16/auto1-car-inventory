import {
  FETCH_ALL_MANUFACTURERS_REQUESTED,
  FETCH_ALL_MANUFACTURERS_SUCCEEDED,
  FETCH_ALL_MANUFACTURERS_FAILED
} from '../constants'

const initialState = {
  isFetchingManufacturers: false,
  manufacturers: [],
  fetchingManufacturersError: null
}

function manufacturers (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_MANUFACTURERS_REQUESTED:
      return Object.assign({}, state, {
        isFetchingManufacturers: true,
        manufacturers: [],
        fetchingManufacturersError: null
      })

    case FETCH_ALL_MANUFACTURERS_SUCCEEDED:
      return Object.assign({}, state, {
        isFetchingManufacturers: false,
        manufacturers: action.payload.manufacturers,
        fetchingManufacturersError: null
      })

    case FETCH_ALL_MANUFACTURERS_FAILED:
      return Object.assign({}, state, {
        isFetchingManufacturers: false,
        manufacturers: [],
        fetchingManufacturersError: action.payload.error.message
      })

    default:
      return state
  }
}

export default manufacturers
