function sumAll(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  let sum = 0;
  for (let index = min; index <= max; index += 1) {
    sum += index;
  }

  return sum;
}

export {
  sumAll,
};
