function memoized(fn) {
  var cache = {}

  return function(...args) {
    const str = args.join('-')

    if (cache[str]) {
      return cache[str]
    }
    const result = fn(...args)
    cache[str] = result

    return result
  }
}

module.exports = memoized
