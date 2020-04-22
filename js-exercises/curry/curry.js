function curry(func) {
  return function curried(...args) {
    // Used to work with normal function call
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      // Used for curried call
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

export {
  curry,
};
