/* eslint-disable no-plusplus */
function sumAll(num) {
  let [lb, ub] = [...num];
  if (lb > ub) {
    const c = lb;
    lb = ub;
    ub = c;
  }
  let sum = 0;
  for (let i = lb; i <= ub; i++) {
    sum += i;
  }
  return sum;
}

export {
  sumAll,
};
