Here's the basic usage of the file that you'll be creating:

```js
var curry = require('./') // <- this is the file you make;

const  join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
const _ = curry.placeholder

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(_, 2)(1, 3) // '1_2_3'

curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'
```

More info: https://en.wikipedia.org/wiki/Currying
