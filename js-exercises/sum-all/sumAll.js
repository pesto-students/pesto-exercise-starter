/* eslint-disable no-plusplus */
function sumAll(arr) {
  const newArr = arr.sort((a, b) => a - b);
  let start = newArr[0];
  const end = newArr[1];
  let sum = 0;
  while (start <= end) {
    sum += start;
    ++start;
  }
  return sum;
}

export {
  sumAll,
};
