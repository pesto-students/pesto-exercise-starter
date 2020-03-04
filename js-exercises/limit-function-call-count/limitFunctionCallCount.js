const limitFunctionCallCount = (callback, numberOfCalls) => {
  return function callFunction(...args) {
    if (numberOfCalls === 0) return null;
    if (args.length >= callback.length) {
      numberOfCalls--;
      return callback.apply(this, args);
    } else {
      return function (...args2) {
        return callFunction.apply(this, args.concat(args2));
      }
    }
  }
};

export {
  limitFunctionCallCount,
};