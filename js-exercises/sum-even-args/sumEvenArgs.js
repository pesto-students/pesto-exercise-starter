
const sumEvenArgs = (...args) => {
  if (args.length === 1) {
    return 0;
  }
  const checkIfIndexIsOdd = (value, index) => index % 2 !== 0;

  const sumTotalAndPresentElement = (total, presentElement) => total + presentElement;

  // since index starts with with 0 so args at odd index have to be considered

  const evenArgsArray = args.filter(checkIfIndexIsOdd);

  const sumEvenArgsArray = evenArgsArray.reduce(sumTotalAndPresentElement);

  return sumEvenArgsArray;
};

export { sumEvenArgs };
