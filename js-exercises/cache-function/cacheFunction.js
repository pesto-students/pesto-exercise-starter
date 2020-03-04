function cacheFunction(callback) {
  let cachedArguments = {};
  return function invokeCallback(...args) {
    if (args in cachedArguments) return cachedArguments[args];
    if (cachedArguments[args] === undefined) {
      cachedArguments[args] = callback(...args);
      return cachedArguments[args];
    }
  }
}

export {
  cacheFunction,
};