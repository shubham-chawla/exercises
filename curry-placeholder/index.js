function curry(func) {
  return function curried(...args) {
    const complete = args.length >= func.length && !args.slice(0, func.length).includes(curry.placeholder);
    if(complete) return func.apply(this, args)
    return function(...newArgs) {
      // replace placeholders in args with values from newArgs
      const res = args.map(arg => arg === curry.placeholder && newArgs.length ? newArgs.shift() : arg);
      return curried(...res, ...newArgs);
    }
  }
}

curry.placeholder = Symbol()


module.exports = curry
