const addBigIntegers = integerString => integerString
  .split('\n')
  .map(number => BigInt(number))
  .reduce(
    (integer, accumulator) => {
      accumulator += integer
      return accumulator
    }, BigInt(0))
  .toString()

export { addBigIntegers };
