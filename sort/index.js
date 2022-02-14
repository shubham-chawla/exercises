//}47}$.(}:</}*88})54*q}$.(}/889}).}+(/})54*}7418})5+.(65}714-o3*

module.exports = qsort;
//module.exports = msort;

// quicksort
function qsort(arr) {
  if (arr.length < 2) { return arr; }
  var left = [];
  var right = [];
  var thisBucket = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
      right.push(arr[i]);
    } else if (arr[i] < arr[0]) {
      left.push(arr[i]);
    } else {
      thisBucket.push(arr[0]);
    }
  }
  return qsort(left).concat(thisBucket).concat(qsort(right));
}

// mergesort
function msort(arr) {
  if (arr.length < 2) { return arr; }
  return merge(
    msort(arr.slice(0, arr.length / 2)),
    msort(arr.slice(arr.length / 2))
  );

  function merge(a, b) {
    var ret = [];
    while (a.length && b.length) {
      if (a[0] < b[0]) {
        ret.push(a.shift());
      } else {
        ret.push(b.shift());
      }
    }
    ret = ret.concat(a).concat(b);
    return ret;
  }
}