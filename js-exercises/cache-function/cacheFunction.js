function cacheFunction(func) {
  let cachedSet = {};
  return function(...args) {
    let uniqueKeyForArgs = [...args];
    if (uniqueKeyForArgs in cachedSet) return cachedSet[uniqueKeyForArgs]
    let result = func(...args);
    cachedSet[uniqueKeyForArgs] = result;
    return result;
  }
}

export {
  cacheFunction,
};
