const isEven = (number) => {
  if (!Number.isSafeInteger(number)) {
    return false;
  }

  const remainder = number / 2;
  if (Math.floor(remainder) !== remainder) {
    return false;
  }

  return true;
};

const isPositive = (number) => {
  if (!Number.isSafeInteger(number)) {
    return false;
  }

  if (Object.is(number, -Math.abs(number))) {
    return false;
  }

  return true;
};

export { isEven, isPositive };
