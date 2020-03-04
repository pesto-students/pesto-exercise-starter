function flipArgs(func) {
  return function(...arguments) {
    arguments.reverse();
    return func.apply(this, arguments);
  };
}
