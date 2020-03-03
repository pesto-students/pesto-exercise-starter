function sumAll(arr) {
  let total = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i += 1) {
    total += i;
  }
  return total;
}

export {
  sumAll,
};
