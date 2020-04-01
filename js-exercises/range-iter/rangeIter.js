function rangeIter(lb, ub) {
  if (lb === undefined || typeof lb !== 'number') {
    throw new TypeError(`${lb} is not a number`);
  }
  if (ub === undefined || typeof ub !== 'number') {
    throw new TypeError(`${ub} is not a number`);
  }
  if (lb > ub) {
    return [];
  }
  if (lb === ub) {
    return [lb];
  }
  const retArray = [];
  for (let i = lb; i <= ub; i += 1) {
    retArray.push(i);
  }
  return retArray;
}

export { rangeIter };
