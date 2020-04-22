const curry = (inputfunction) => {
  return function curried(...args) {
    if (args.length >= inputfunction.length) {
      return inputfunction.apply(this, args);
    } else {
      return function(...restArgs) {
        return curried.apply(this, args.concat(restArgs));
      }
    }
  };
}

export {
  curry,
};
