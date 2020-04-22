function sumFibs(n) {
  let n1 = 1;
  let n2 = 1;
  let nsum = 2;
  let fibSum = 2;
  while (nsum <= n) {
    n1 = n2;
    n2 = nsum;
    nsum = n1 + n2;
    if ((n2 % 2) !== 0) {
      fibSum += n2;
    }
  }
  return fibSum;
}

export {
  sumFibs,
};
