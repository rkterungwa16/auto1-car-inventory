/**
 * Asynchronously return car object to be added to localStorage
 * @param {Object} car object containing car details
 * @return {Promise} promise
 */
export const addFavoriteCarAsync = (car) => {
  return new Promise((resolve, reject) => {
    const cars = localStorage.getItem('cars')
    process.nextTick(() => {
      if (cars) {
        let exists = false
        // resolve({ cars })
        JSON.parse(cars).forEach((element) => {
          if (element.modelName === car.modelName) {
            exists = true
          }
        })
        if (exists) {
          const carAlreadyExistsError = new Error('Car already exists')
          return reject(carAlreadyExistsError)
        }
        const parsedLocalStorageData = JSON.parse(localStorage.getItem('cars'))
        const modifiedFavCars = parsedLocalStorageData.concat(car)
        localStorage.setItem('cars', JSON.stringify(modifiedFavCars))
        return resolve({ cars: modifiedFavCars })
      }
      localStorage.setItem('cars', JSON.stringify([car]))
      resolve({ cars: [car] })
    })
  })
}

/**
 * Asynchronously return car object to be removed from localStorage
 * @param {Object} car object containing car details
 * @return {Promise} promise
 */
export const removeFromFavoriteCarAsync = (car) => {
  return new Promise((resolve, reject) => {
    const cars = localStorage.getItem('cars')
    process.nextTick(() => {
      if (cars && cars.length > 1) {
        const parsedLocalStorageData = JSON.parse(cars)
        const modifiedCars = parsedLocalStorageData.filter((data, index, arr) => {
          return data.modelName !== car.modelName
        })
        return resolve({ cars: modifiedCars })
      }
      if (cars && cars.length === 0) {
        const emptyStorageError = new Error()
        emptyStorageError.message = 'Storage is empty. Add cars to storage'
        return reject(emptyStorageError)
      }
    })
  })
}
