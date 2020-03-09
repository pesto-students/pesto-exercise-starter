const memoizer = (funcToCall, keyMaker = JSON.stringify) => {
  const inMemoryCache = new Map();
  return valueToProcess => {
    const keyToProcess = keyMaker(valueToProcess);
    if (inMemoryCache.has(keyToProcess)) {
      return inMemoryCache.get(keyToProcess);
    }
    const processedValue = funcToCall(valueToProcess);
    inMemoryCache.set(keyToProcess, processedValue);
    return processedValue;
  };
};

const cacheFunction = inputFunction => memoizer(inputFunction);

export { cacheFunction };
