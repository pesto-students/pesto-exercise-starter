const sumEvenArgs = (...args) => {
  const argumentArray = args.filter((element) => element % 2 === 0);
  let sumOfArray = 0;
  for (let i = 0; i < argumentArray.length; i += 1) {
    sumOfArray += argumentArray[i];
  }
  return sumOfArray;
};

export { sumEvenArgs };
