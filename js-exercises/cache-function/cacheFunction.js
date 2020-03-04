const cacheFunction = (inputFunction) => {
  let cacheMap = {};
  return function(...args) {
    const argumentsKey = [...args].toString();
    if (argumentsKey in cacheMap) return cacheMap[argumentsKey]
    const result = inputFunction(...args);
    cacheMap[argumentsKey] = result;
    return result;
  }
}
export {
  cacheFunction,
};
