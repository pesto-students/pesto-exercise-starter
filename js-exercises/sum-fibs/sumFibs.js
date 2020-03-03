function sumFibs(number) {
  const pattern = [1, 1];
  let sum = 2;
  for (let i = 2; i <= number; i += 1) {
    const nextValue = pattern[i - 1] + pattern[i - 2];

    if (nextValue > number) break;

    pattern[i] = nextValue;
    if (nextValue % 2 !== 0) sum += nextValue;
  }
  return sum;
}

export {
  sumFibs,
};
