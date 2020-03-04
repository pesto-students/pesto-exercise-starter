const limitFunctionCallCount = (func, limit) => {
  let counter = 0;
  return function(...args) {
    while (counter < limit) {
      counter++;
      return func(...args);
    }
    throw new Error('Cannot call, limit exceeded!')
  }
};

export {
  limitFunctionCallCount,
};
;