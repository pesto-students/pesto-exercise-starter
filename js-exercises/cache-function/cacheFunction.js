
const cachedDataMap = new Map();
const cachedDataAvailableMap = new Map();

function cacheFunction(cb) {
  return (arg) => {
    const cachedDataAvailable = cachedDataAvailableMap.get(arg);
    if (cachedDataAvailable) {
      return cachedDataMap.get(arg);
    }
    const result = cb(arg);
    cachedDataMap.set(arg, result);
    cachedDataAvailableMap.set(arg, true);
    return result;
  };
}


export {
  cacheFunction,
};
