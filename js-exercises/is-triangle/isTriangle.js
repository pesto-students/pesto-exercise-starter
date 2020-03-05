function isTriangle(a, b, c) {
  if (a <= b + c && b <= c + a && c <= b + a) return true;
  return false;
}

export {
  isTriangle,
};
