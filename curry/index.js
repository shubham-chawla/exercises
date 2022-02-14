function curry(fn) {
  return function innerCurry(...args) {
    if (args.length >= fn.length) {
      return fn(...args)
    }

    return (...args2) => innerCurry(...args, ...args2)
  }
}

module.exports = curry
