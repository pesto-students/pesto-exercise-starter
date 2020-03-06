const sumEvenArgs = (...args) => {
  let isSum = number => {
    if (number === 1) return false;
    return !Boolean(number % 2);
  }
  let onlySumArguments = args.filter(isSum);
  return onlySumArguments.reduce((sumEvenArgs, currentValue) => {
    return sumEvenArgs + currentValue;
  }, 0);
};

export {
  sumEvenArgs
};