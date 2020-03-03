function isTriangle(sideA, sideB, sideC) {
  let returnObj = false;
  if (sideA + sideB > sideC) {
    if (sideB + sideC > sideA) {
      if (sideC + sideA > sideB) {
        returnObj = true;
      }
    }
  }
  return returnObj;
}

export {
  isTriangle,
};
