import carsReducer from '../../reducers/cars'

let store = {}
const localStorageMock = {
  getItem: jest.fn().mockImplementation((key) => {
    return store[key] || null
  }),
  setItem: jest.fn((key, value) => {
    store[key] = value
  }),
  clear: jest.fn().mockImplementation(() => {
    store = {}
  }),
  removeItem: jest.fn().mockImplementation((key) => {
    delete store[key]
  })
}
window.localStorage = localStorageMock

window.localStorage.setItem('cars', JSON.stringify([]))
test('should setup default cars values', () => {
  const state = carsReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    isFetchingCars: false,
    cars: [],
    favoriteCars: [],
    totalPageCount: null,
    carRemoved: {},
    fetchingCarsError: null,
    isFetchingSingleCar: false,
    car: {},
    fetchingSingleCarError: null,
    isAddingCar: false,
    addingCarError: null,
    isRemovingCars: false,
    removingCarError: null
  })
})

test('should request to fetch all cars', () => {
  const state = carsReducer(undefined, { type: 'FETCH_ALL_CARS_REQUESTED' })
  expect(state.isFetchingCars).toBe(true)
})

test('should successfully fetch all cars', () => {
  const state = carsReducer(undefined, {
    type: 'FETCH_ALL_CARS_SUCCEEDED',
    payload: { cars: ['mercedes'] }
  })
  expect(state.cars).toEqual(['mercedes'])
})

test('should return error on failure to fetch cars', () => {
  const state = carsReducer(undefined, {
    type: 'FETCH_ALL_CARS_FAILED',
    payload: {
      error: {
        message: 'error'
      }
    }
  })
  expect(state.fetchingCarsError).toEqual('error')
})

test('should request to fetch single car', () => {
  const state = carsReducer(undefined, { type: 'FETCH_SINGLE_CAR_REQUESTED' })
  expect(state.isFetchingSingleCar).toBe(true)
})

test('should successfully fetch single car', () => {
  const state = carsReducer(undefined, {
    type: 'FETCH_SINGLE_CAR_SUCCEEDED',
    payload: { car: ['mercedes'] }
  })
  expect(state.car).toEqual(['mercedes'])
})

test('should return error on failure to fetch car', () => {
  const state = carsReducer(undefined, {
    type: 'FETCH_SINGLE_CAR_FAILED',
    payload: {
      error: {
        message: 'error'
      }
    }
  })
  expect(state.fetchingSingleCarError).toEqual('error')
})

test('should request adding favorite car', () => {
  const state = carsReducer(undefined, { type: 'ADD_CAR_TO_FAVORITES_COLLECTION_REQUESTED' })
  expect(state.isAddingCar).toBe(true)
})

test('should successfully add favorite car', () => {

  const state = carsReducer(undefined, {
    type: 'ADD_CAR_TO_FAVORITES_COLLECTION_SUCCEEDED',
    payload: { cars: ['mercedes'] }
  })
  expect(state.favoriteCars).toEqual(['mercedes'])
})

test('should return error on failure to add car', () => {
  const state = carsReducer(undefined, {
    type: 'ADD_CAR_TO_FAVORITES_COLLECTION_FAILED',
    payload: {
      message: 'error'
    }
  })
  expect(JSON.parse(state.addingCarError).message).toEqual('error')
})
