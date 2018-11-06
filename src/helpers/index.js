/**
 * check if an object is empty
 * @param {Object} obj object to check
 * @return {Boolean} true if is empty else false
 */
export const isEmpty = (obj) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) { return false }
  }
  return true
}

/**
 * Asynchronously add car object to localStorage
 * @param {Object} car object containing car details
 * @return {Promise} promise
 */
export const addFavoriteCarAsync = (car) => {
  return new Promise((resolve, reject) => {
    const cars = localStorage.getItem('cars')
    process.nextTick(() => {
      if (cars) {
        let exists = false
        JSON.parse(cars).forEach((element) => {
          if (element.modelName === car.modelName) {
            exists = true
          }
        })
        if (exists) {
          return reject(new Error({
            message: 'Car already exists'
          }))
        }
        return resolve({ car })
      }
      localStorage.setItem('cars', JSON.stringify([]))
      resolve({ car })
    })
  })
}
