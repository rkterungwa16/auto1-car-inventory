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
      const parsedResponse = JSON.parse(response)
      expect(parsedResponse.modelName).toEqual()
      expect(response.modelName).toEqual('car')
    })
  })

  it('fetch fetch single car', function () {
    getSingleCarApi('1234').then(response => {
      expect(response.modelName).toBe('car')
    })
  })
})
