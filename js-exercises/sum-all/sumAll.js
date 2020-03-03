function sumAll(a) {
  const a1 = a.sort((b, c) => b - c);
  let sum = 0;
  for (let i = a1[0]; i <= a1[1]; i += 1) {
    sum += i;
  }
  return sum;
}


export {
  sumAll,
};
