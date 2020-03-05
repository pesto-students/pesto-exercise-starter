function isTriangle(sideA, sideB, sideC) {
  if ((sideA + sideB <= sideC) ||
        (sideA + sideC <= sideB) ||
        (sideB + sideC <= sideA))
        return false;
    else
        return true;
}

module.exports = isTriangle;
