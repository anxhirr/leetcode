/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const result = []
    let counter = 0
    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((value) => {
          result[i] = value
          counter++
          if (counter === functions.length) resolve(result)
        })
        .catch((error) => {
          reject(error)
        })
    }
  })
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
