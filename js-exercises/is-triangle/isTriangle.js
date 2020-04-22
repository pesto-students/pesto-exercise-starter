function isTriangle(sideA, sideB, sideC) {
  if (sideA === undefined || sideB === undefined || sideC === undefined) {
    return false;
  }
  if (sideA === 0 || sideB === 0 || sideC === 0) {
    return false;
  }
  if (sideC === Math.sqrt(sideA * sideA + sideB * sideB)) {
    return true;
  }
  return false;
}

export {
  isTriangle,
};
