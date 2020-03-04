function curry(functionArgument) {
  return function curried(...args) {
    if (args.length >= functionArgument.length) {
      return functionArgument.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

export {
  curry,
};