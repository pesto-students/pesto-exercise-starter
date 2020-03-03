function isTriangle(a, b, c) {
  let isSide1 = (a + b > c ? true:false);
  let isSide2 = (b + c > a ? true:false);
  let isSide3 = (a + c > b ? true:false);

  return (isSide1 && isSide2 && isSide3 ? true: false);
}

export {
  isTriangle,
};
