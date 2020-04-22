function cacheFunction(cb) {
  const cache = {};
  function invokeCb(...rest) {
    const key = JSON.stringify(...rest);

    if (key in cache) {
      return cache[key];
    }
    const result = cb(...rest);
    cache[key] = result;
    return result;
  }
  return invokeCb;
}

export { cacheFunction };
