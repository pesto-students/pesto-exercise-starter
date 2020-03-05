const limitFunctionCallCount = (callback, callbackCountLimit) => {
  let callCount = 0;
  return (...args) => {
    if (callCount < callbackCountLimit) {
      callCount += 1;
      return callback(...args);
    }
    return null;
  };
};

export {
  limitFunctionCallCount,
};
