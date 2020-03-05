
function isTriangle (a, b, c) {
  if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
    return false;
  }
  else {
    if ((a <= 0) || (b <= 0) || (c <= 0)) {
    return false;
  }
    else {
    return true;
    }
  }
}

export {
  isTriangle,
};
