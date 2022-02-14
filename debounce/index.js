function debounce(cb, delay) {
  let timeout
  return function(...args) {
    clearTimeout(timeout)

    timeout = setTimeout(() => cb.apply(this, args), delay)
  }
}

module.exports = debounce
