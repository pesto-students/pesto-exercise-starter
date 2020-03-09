const limitFunctionCallCount = (cb, maxNumberOfCallsAllowed) => {
  let numberOfTimesCalled = 0;
  return (...remainingArgs) => {
    if (++numberOfTimesCalled <= maxNumberOfCallsAllowed) {
      return cb(...remainingArgs);
    }
    return null;
  };
};

export { limitFunctionCallCount };
