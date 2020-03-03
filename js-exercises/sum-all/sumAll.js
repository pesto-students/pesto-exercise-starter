function sumAll(numArray) {
  let largeNo = 0;
  let smallNo = 0;
  let sum = 0;
  if (numArray[0] > numArray[1]) {
    [largeNo, smallNo] = [numArray[0], numArray[1]];
  } else {
    [largeNo, smallNo] = [numArray[1], numArray[0]];
  }
  for (let i = smallNo; i <= largeNo; i += 1) {
    sum += i;
  }
  return sum;
}

export {
  sumAll,
};
