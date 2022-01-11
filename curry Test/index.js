function curry(func) {
  // write code here
  return function curry(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        console.log(args2);
        return curry.apply(this, args.concat(args2));
      };
    }
  };
}

function getSum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(getSum);

// Output:
console.log(curriedSum(1, 2, 3)); // 6,
console.log(curriedSum(1)(2, 3)); // 6,
console.log(curriedSum(1)(2)(3)); // 6,
