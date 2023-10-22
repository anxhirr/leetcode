/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  const obj = new Map()
  this.forEach((item, i) => {
    const key = fn(item)
    // const filteredByKey = this.filter(val=> fn(val) === key)
    // obj[key]= filteredByKey
    if (!obj.has(key)) obj.set(key, [])

    obj.get(key).push(item)
  })
  const result = {}
  obj.forEach((value, key) => {
    result[key] = value
  })

  return result
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
