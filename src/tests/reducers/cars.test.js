import carsReducer from '../../reducers/cars'

test('should setup default cars values', () => {
  const state = carsReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    isFetchingCars: false,
    cars: [],
    favoriteCars: [],
    totalPageCount: null,
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
