function rangeIter(lb, ub) {
  if (typeof ub === "undefined" || typeof lb === "undefined") {
    throw new TypeError("undefined is not a number");
  }
  if (typeof ub === "string") {
    throw new TypeError(`${ub} is not a number`);
  }
  if (typeof step == "undefined") {
    var step;
    step = 1;
  }
  if (ub === lb) {
    return [lb];
  }
  if ((step > 0 && lb >= ub) || (step < 0 && lb <= ub)) {
    return [];
  }

  const result = [];

  for (let i = lb; step > 0 ? i <= ub : i > ub; i += step) {
    result.push(i);
  }

  return result;
}

// console.log(rangeIter(-1, -1));

export { rangeIter };
