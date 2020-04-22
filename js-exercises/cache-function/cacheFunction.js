
function cacheFunction(func) {
  let cache = {};
  return (param) => {
    if (param in cache) {
      return cache[param];
    }
    else {
      let result = func(param);
      cache[param] = result;
      return result;
    }
  }
}
export {
  cacheFunction,
};
