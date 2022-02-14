module.exports = throttle

function throttle(fn, ms) {
  var lastCalled;
  var timeout;
  var ctx;
  var args;

  return function() {

    if (!lastCalled || (new Date() - lastCalled > ms && !timeout)) {
      lastCalled = new Date();
      return fn.apply(this, arguments);
    } else {

      ctx = this;
      args = [].slice.call(arguments);

      if (!timeout) {
        timeout = setTimeout(function() {
          lastCalled = new Date();
          fn.apply(ctx, args);
          timeout = null;
        }, ms);
      }
    }

  };
}
