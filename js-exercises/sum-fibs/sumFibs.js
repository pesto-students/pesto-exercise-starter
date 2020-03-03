function sumFibs(x) {
  
  var result =sumFibonachi(Number(x));
  return result;
}

function sumFibonachi(n, a = Number(0), b = Number(1)) {
  if (a > n) return 0;
  if (a % 2 !== 0) return a + sumFibonachi(n, a + b, a);
  else return 0 + sumFibonachi(n, a + b, a);
}

export {
  sumFibs,
};
