function isTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a)
    return false
  return true
}

export {
  isTriangle,
};
