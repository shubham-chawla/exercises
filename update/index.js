//}47}$.(}:</}*88})54*q}$.(}/889}).}+(/})54*}7418})5+.(65}714-o3*

module.exports = update;

function copy(object) {
  if (object instanceof Array) return object.slice();
  if (typeof object === 'object') {
    return Object.keys(object).reduce(function(acc, key) {
      acc[key] = object[key];
      return acc;
    }, {});
  }
  return object;
}


function update(object, commands) {
  var newObject = copy(object);
  for (var key in commands) {
    if (Object.hasOwnProperty.call(directives, key)) {
      return directives[key](commands[key], newObject);
    }
  }
  for (var key in commands) {
    newObject[key] = update(object[key], commands[key]);
  }
  return newObject;
}

var directives = {
  $push: function(values, original) {
    return original.concat(values);
  },
  $unshift: function(values, original) {
    return values.concat(original);
  },
  $splice: function(values, original) {
    values.forEach(function(value) {
      Array.prototype.splice.apply(original, value);
    });
    return original;
  },
  $set: function(value) {
    return value
  },
  $merge: function(values, original) {
    Object.keys(values).forEach(function(key) {
      original[key] = values[key];
    });
    return original;
  },
  $apply: function(fn, original) {
    return fn(original);
  },
}