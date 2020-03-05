function cacheFunction(callback) {
  const seenArgs = {};
  return (arg) => {
    if (arg in seenArgs) {
      return seenArgs[arg];
    }
    seenArgs[arg] = callback(arg);
    return callback(arg);
  };
}

export {
  cacheFunction,
};
