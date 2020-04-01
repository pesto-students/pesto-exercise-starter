
function lastIndexOf(...args) {
  if (args === undefined || args.length < 2) {
    return -1;
  }
  const findItem = args[0];
  let count = 0;
  let lastCount = -1;
  args[1].forEach(element => {
    if (findItem === element) {
      lastCount = count;
    }
    count += 1;
  });
  return lastCount;
}

export {
  lastIndexOf,
};
