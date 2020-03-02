function sumAll(arr) {
  const firstNum = arr[0];
  const lastNum = arr[1];
  let start = firstNum < lastNum ? firstNum : lastNum;
  const end = firstNum < lastNum ? lastNum : firstNum;
  let sum = 0;
  for (start; start <= end;) {
    sum += start;
    start += 1;
  }
  return sum;
}

export {
  sumAll,
};
