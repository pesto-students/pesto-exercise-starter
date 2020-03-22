
const findGreatestCommonDiviser = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGreatestCommonDiviser(num2, num1 % num2);
};

function leastCommonMultiple(...args) {
  const num1 = args[0];
  const num2 = args[1];
  const gcd = findGreatestCommonDiviser(num1, num2);
  const lcm = (num1 * num2) / gcd;
  return lcm;
}

export {
  leastCommonMultiple,
};
