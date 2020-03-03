function isTriangle(...arg) {
  const a = arg[0];
  const b = arg[1];
  const c = arg[2];
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
}
export {
  isTriangle,
};
