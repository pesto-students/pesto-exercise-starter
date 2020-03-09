/* eslint-disable implicit-arrow-linebreak */

const sumEvenArgs = (...args) =>
  args.reduce(
    (accumalator, currVal) => accumalator + (currVal % 2 === 0 ? currVal : 0),
    0
  );

export { sumEvenArgs };
