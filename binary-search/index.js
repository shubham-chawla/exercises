function search(arr, target) {
  const low = 0
  const high = arr.length - 1

  function binarySearch(l, h, t) {
    const mid = Math.floor((h + l) / 2)
    const middle = arr[mid]
    if (l > h) return -1
    if (middle === t) return mid
    if (middle > t) return binarySearch(l, mid, t)
    return binarySearch(mid + 1, h, t)
  }

  return binarySearch(low, high, target)
}

module.exports = search
