function isTriangle(x, y, z) {
  return x + y > z && y + z > x && x + z > y;
}

export { isTriangle };
