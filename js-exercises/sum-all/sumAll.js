function sumAll(numbers) {
  if (numbers === undefined) {
    return false;
  }

  if (!Array.isArray(numbers)) {
    return false;
  }
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  if (min === max) {
    return min;
  }
  let sum = 0;
  for (let i = min; i <= max; i += 1) {
    sum += i;
  }
  return sum;
}

export {
  sumAll,
};
