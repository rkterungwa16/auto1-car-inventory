import {
  getManufacturersApi
} from '../../utils/manufacturers'

describe('Manufacturers API', function () {
  beforeEach(function () {
    const manufacturers = JSON.stringify(['BMW'])
    window.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({
          status: 200,
          json: () => manufacturers
        })
      })
    })
  })

  it('fetch all manufacturers', function () {
    getManufacturersApi().then(response => {
      expect(response[0]).toBe('BMW')
    })
  })
})
