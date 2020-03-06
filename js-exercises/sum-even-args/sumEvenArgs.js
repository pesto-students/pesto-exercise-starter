const sumEvenArgs = (...args) => {
  const checkIfEven = (acc, val) => val % 2 === 0 ? acc + val : acc;

  return args.reduce(checkIfEven, 0);
};

export { sumEvenArgs };
