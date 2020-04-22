const limitFunctionCallCount = (inputFunction, limit) => {
  let limitCounter = 0
  return function(...args) {
    while (limitCounter < limit) {
      limitCounter++;
      return inputFunction(...args);
    }
    return null
  }
}

export {
  limitFunctionCallCount
};
