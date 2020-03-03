function sumAll(...args) {
  const largeNumber = Math.max(...args[0]);
  const smallNumber = Math.min(...args[0]);
  return ((largeNumber - smallNumber + 1) * (smallNumber + largeNumber)) / 2;
}

export {
  sumAll,
};
