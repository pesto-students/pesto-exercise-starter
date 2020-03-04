const cacheFunction = (inputFunction) => {
  let cacheMap = {};
  return function(...args) {
    let argumentsKey = [...args];
    if (argumentsKey in cacheMap) return cacheMap[argumentsKey]
    let result = inputFunction(...args);
    cacheMap[argumentsKey] = result;
    return result;
  }
}
export {
  cacheFunction,
};
