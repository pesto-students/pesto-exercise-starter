function flipArgs(func) {
  return function (...args) {
    args.reverse();
    return func.apply(this,args);
  }
}

export { flipArgs };