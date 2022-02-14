function flatten(arr) {
  return arr.reduce((acc, next) => {
    const isArray = Array.isArray(next)
    return acc.concat(isArray ? flatten(next) : next)
  }, [])
}

module.exports = flatten
