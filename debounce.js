/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  return function (...args) {
    let prevCall = this.lastCall
    this.lastCall = Date.now()
    if (prevCall && this.lastCall - prevCall <= t) {
      clearTimeout(this.lastCallTimer)
    }
    this.lastCallTimer = setTimeout(() => fn(...args), t)
  }
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
