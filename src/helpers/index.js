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
