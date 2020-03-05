function curry(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

export {
  curry,
};
