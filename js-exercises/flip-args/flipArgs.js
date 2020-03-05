function flipArgs(callback) {
  return (...args) => callback(args.reverse());
}

export {
  flipArgs,
};
