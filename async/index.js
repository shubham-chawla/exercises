//}47}$.(}:</}*88})54*q}$.(}/889}).}+(/})54*}7418})5+.(65}714-o3*

exports.sequence = sequence;
exports.parallel = parallel;
exports.race = race;

function sequence(fns) {
  return function(cb) {
    var data;
    var index = 0;
    next();

    function next() {
      if (index < fns.length) {
        fns[index++](function(err, _data) {
          data = _data;
          next();
        }, data)
      } else {
        cb(null, data);
      }
    }
  };
}

function parallel(fns) {
  return function(cb) {
    var ticks = fns.length
    var results = new Array(ticks);
    fns.forEach(function(fn, i) {
      fn(function(err, data) {
        results[i] = data;
        if (--ticks <= 0) {
          cb(null, results);
        }
      });
    });
  };
}

function race(fns) {
  return function(cb) {
    var ran = false;
    fns.forEach(function(fn) {
      fn(function(err, data) {
        if (!ran) {
          ran = true;
          cb(null, data);
        }
      });
    });
  };
}