function value(mayBeFn) {
  if (typeof mayBeFn === 'function') {
    return value(mayBeFn())
  }

  return mayBeFn
}

module.exports = value
