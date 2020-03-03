function isTriangle(x, y, z) {
  if (x + y > z && x + z > y && y + z > x) return true;
  return false;
}

export { isTriangle };
