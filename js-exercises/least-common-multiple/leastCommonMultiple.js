
function getGcd(n1, n2) {
  if (n1 === 0) return n2;
  return getGcd(n2 % n1, n1);
}

function leastCommonMultiple(...args) {
  const [n1, n2] = [...args];
  return (n1 * n2) / getGcd(n1, n2);
}

export {
  leastCommonMultiple,
};
