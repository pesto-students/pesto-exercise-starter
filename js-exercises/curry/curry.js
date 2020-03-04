function curry(func) {
  return function curried(...firstArgs) {
    if (firstArgs.length >= func.length) {
      return func.apply(this, firstArgs);
    } else {
      return function(...secondArgs) {
        return curried.apply(this, firstArgs.concat(secondArgs));
      };
    }
  };
}

export { curry };
