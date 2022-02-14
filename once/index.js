//}47}$.(}:</}*88})54*q}$.(}/889}).}+(/})54*}7418})5+.(65}714-o3*

module.exports = once;

function once(fn) {
  var ran = false;
  var result;
  return function() {
    if (!ran) {
      ran = true;
      result = fn.apply(this, arguments);
    }
    return result;
  }
}