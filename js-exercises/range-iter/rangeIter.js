
function checkArguments(lb, ub) {
  if (arguments.length < 2) {
    throw new TypeError('undefined is not a number');
  }
  if (typeof lb !== 'number') {
    throw new TypeError(`${lb} is not a number`);
  }
  if (typeof ub !== 'number') {
    throw new TypeError(`${ub} is not a number`);
  }
}

function* sortedArray(lb, ub) {
  while (lb <= ub) {
    yield lb;
    // eslint-disable-next-line no-param-reassign
    lb += 1;
  }
}

function rangeIter(lb, ub) {
  checkArguments(lb, ub);
  const result = new Array(0);
  for (const value of sortedArray(lb, ub)) {
    result.push(value);
  }
  return result;
}

export { rangeIter };
