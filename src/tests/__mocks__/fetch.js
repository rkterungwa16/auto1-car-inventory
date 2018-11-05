import cars from '../fixtures/cars'
import colors from '../fixtures/colors'
import manufacturers from '../fixtures/manufacturers'

const apiResources = {
  cars,
  colors,
  manufacturers
}

export default function fetch (url) {
  return new Promise((resolve, reject) => {
    // const userID = parseInt(url.substr('/users/'.length), 10)
    process.nextTick(
      () => {
        resolve(cars)
        reject(new Error({
          error: 'Resource not found.'
        }))
      }
    )
  })
}
