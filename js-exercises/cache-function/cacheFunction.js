function cacheFunction(cb) {
  let returnedCache = {};
  return (args) => {
    if (returnedCache === args) {
      return returnedCache;
    }
    returnedCache = args;
    return cb(args);
  };
}

export {
  cacheFunction,
};
