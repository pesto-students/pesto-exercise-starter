
function curry(callback, ...args) {
  return ((callback.length <= args.length)
    ? callback(...args) : (...more) => curry(callback, ...args, ...more));
}

export {
  curry,
};
