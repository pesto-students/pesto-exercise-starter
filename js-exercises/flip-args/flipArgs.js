function flipArgs(argumentFunction) {
  return function flipper(...args) {
    if (args.length >= argumentFunction.length) {
      return argumentFunction.apply(this, args.reverse());
    } else {
      return function (...args2) {
        return flipper.apply(this, args.concat(args2.reverse()));
      }
    }
  }
}

export {
  flipArgs
};