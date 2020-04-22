function getGreatestAndRemaining(n1, n2, n3) {
  if ((n1 > n2) && (n1 > n3)) {
    return {'greatest': n1, 'remaining': [n2, n3] };
  } else if ((n2 > n1) && (n2 > n3)) {
    return { 'greatest': n2, 'remaining': [n1, n3] };
  }
  return { 'greatest': n3, 'remaining': [n1, n2] };
}

function isTriangle(side1, side2, side3) {
  const { greatest, remaining } = getGreatestAndRemaining(side1, side2, side3)
  return greatest < remaining[0] + remaining[1];
}

export {
  isTriangle,
};
