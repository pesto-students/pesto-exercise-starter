function cacheFunction(func) {
  const cachedResults = new Map();
  return function cachedFuction(args) {
    let result = cachedResults.get(args);
    if (cachedResults.has(args)) return result;
    result = func(args);
    cachedResults.set(args, result);
    return result;
  };
}

export { cacheFunction };
