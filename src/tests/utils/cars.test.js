import {
  getCarsApi,
  getSingleCarApi
} from '../../utils/cars'

describe('Cars API', function () {
  beforeEach(function () {
    const cars = JSON.stringify({ modelName: 'car' })
    window.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({
          status: 200,
          json: () => cars
        })
      })
    })
  })

  it('fetch all cars', function () {
    getCarsApi().then(response => {
      expect(response.modelName).toBe('car')
    })
  })

  it('fetch fetch single car', function () {
    getSingleCarApi('1234').then(response => {
      expect(response.modelName).toBe('car')
    })
  })
})
