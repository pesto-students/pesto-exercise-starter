function isTriangle(a, b, c) {
  const biggestSide = Math.max(a, b, c);
  if (a === biggestSide && b + c <= a) return false;
  if (b === biggestSide && c + a <= b) return false;
  if (c === biggestSide && a + b <= c) return false;
  return true;
}

export { isTriangle };
