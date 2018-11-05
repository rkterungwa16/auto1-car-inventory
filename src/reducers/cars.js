import {
  FETCH_ALL_CARS_SUCCEEDED,
  FETCH_ALL_CARS_REQUESTED,
  FETCH_ALL_CARS_FAILED,
  FETCH_SINGLE_CAR_FAILED,
  FETCH_SINGLE_CAR_REQUESTED,
  FETCH_SINGLE_CAR_SUCCEEDED,
  ADD_CAR_TO_FAVORITES_COLLECTION_REQUESTED,
  ADD_CAR_TO_FAVORITES_COLLECTION_SUCCEEDED,
  ADD_CAR_TO_FAVORITES_COLLECTION_FAILED
} from '../constants'

const initialState = {
  isFetchingCars: false,
  cars: [],
  totalPageCount: null,
  fetchingCarsError: null,
  isFetchingSingleCar: false,
  car: {},
  fetchingSingleCarError: null,
  isAddingCar: false,
  addingCarError: null,
  isRemovingCars: false,
  removingCarError: null
}

function cars (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_CARS_REQUESTED:
      return Object.assign({}, state, {
        isFetchingCars: true,
        cars: [],
        fetchingCarsError: null
      })

    case FETCH_ALL_CARS_SUCCEEDED:
      return Object.assign({}, state, {
        isFetchingCars: false,
        cars: action.payload.cars,
        totalPageCount: action.payload.totalPageCount,
        fetchingCarsError: null
      })

    case FETCH_ALL_CARS_FAILED:
      return Object.assign({}, state, {
        isFetchingCars: false,
        cars: [],
        fetchingCarsError: action.payload.error.message
      })

    case FETCH_SINGLE_CAR_REQUESTED:
      return Object.assign({}, state, {
        isFetchingSingleCar: true,
        cars: [],
        fetchingSingleCarError: null
      })

    case FETCH_SINGLE_CAR_SUCCEEDED:
      return Object.assign({}, state, {
        isFetchingSingleCar: false,
        car: action.payload.car,
        fetchingSingleCarError: null
      })

    case FETCH_SINGLE_CAR_FAILED:
      return Object.assign({}, state, {
        isFetchingSingleCar: false,
        car: {},
        fetchingSingleCarError: action.payload.error.message
      })

    case ADD_CAR_TO_FAVORITES_COLLECTION_SUCCEEDED:
      const addedCar = state.car.concat([action.payload.data])
      return Object.assign({}, state, {
        isAddingCar: true,
        cars: addedCar,
        addCarError: null
      })

    case ADD_CAR_TO_FAVORITES_COLLECTION_FAILED:
      return Object.assign({}, state, {
        isAddingCar: false,
        cars: false,
        addingCarError: action.payload.error.message
      })

    case ADD_CAR_TO_FAVORITES_COLLECTION_REQUESTED:
      return Object.assign({}, state, {
        isAddingCar: true,
        cars: [],
        addingCarsError: null
      })

    default:
      return state
  }
}

export default cars
