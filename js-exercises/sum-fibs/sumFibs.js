function sumFibs(number) {
  const sequence = [1, 1];
  let sum = 2;
  for (let i = 2; i <= number; i += 1) {
    const nextValue = sequence[i - 1] + sequence[i - 2];

    if (nextValue > number) break;

    sequence[i] = nextValue;
    if (nextValue % 2 !== 0) sum += nextValue;
  }
  return sum;
}

export {
  sumFibs,
};
