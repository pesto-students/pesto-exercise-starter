let timesInvoked = 1;
const limitFunctionCallCount = (callback, maxInvocationLimit) => {

  return (...args) => {
    if (timesInvoked > maxInvocationLimit) {
      return null;
    }
    timesInvoked += 1;
    return callback(...args);
  };
};

export {
  limitFunctionCallCount,
};
