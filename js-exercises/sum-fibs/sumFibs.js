function isLessThanNumber(num, febno) {
  if (febno < num && febno % 2 !== 0) {
    return true;
  }
  return false;
}


function sumFibs(n) {
  let a = 0;
  let b = 1;
  let f = 1;
  const arr = [1];
  let sum = 0;
  for (let i = 2; i <= n; i += 1) {
    f = a + b;
    a = b;
    b = f;
    arr.push(b);
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (isLessThanNumber(n, arr[i], sum)) {
      sum += (arr[i]);
    }
  }
  return (sum);
}
export {
  sumFibs,
};
