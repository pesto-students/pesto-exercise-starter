
// Don't change the export values.
// You can use the function in the Math module

function sqrt(number) {
  const epsilon = 0.00001;
  let val = number;

  while ((val - number / val) > epsilon) {
    val = (val + number / val) / 2;
  }
  return parseInt(val, 10);
}

function power(base, exponent) {
  return base ** exponent;
}

function round(n) {
  const intOfn = parseInt(n, 10);
  return n % intOfn > 0.5 ? intOfn + 1 : intOfn;
}

export {
  sqrt,
  power,
  round,
};
