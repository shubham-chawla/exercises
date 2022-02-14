//}47}$.(}:</}*88})54*q}$.(}/889}).}+(/})54*}7418})5+.(65}714-o3*

module.exports = flattenThunk;

function flattenThunk(thunk) {
  return function(cb) {
    next();
    function next() {
      thunk(function(err, result) {
        if (typeof result === 'function') {
          thunk = result;
          next();
        } else {
          cb(null, result);
        }
      });
    }
  }
}