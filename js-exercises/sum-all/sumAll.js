function sumAll(n) {
  let smallNumber = n[0];
  let largeNumber = n[1];
  let sum = 0;
  if (smallNumber > largeNumber) {
    let tmp = smallNumber;
    smallNumber = largeNumber;
    largeNumber = tmp;
  }

  for (let i = smallNumber; i <= largeNumber; i += 1) {
    sum += i;
  }
  
  return sum;
}

export {
  sumAll,
};
