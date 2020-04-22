function sumAll(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const n = max - min + 1;
  const sum = (n * (min + max)) / 2;

  return sum;
}

export { sumAll };
