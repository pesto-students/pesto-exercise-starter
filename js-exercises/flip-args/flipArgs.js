function flipArgs(cb) {
  return (...args) => {
    const tempArgs = args.map(arg => arg);
    tempArgs.reverse();
    return cb(...tempArgs);
  };
}
export {
  flipArgs,
};
