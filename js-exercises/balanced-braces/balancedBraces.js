
function balancedBraces(inputString) {
  const typesOfBraces = '[]{}()';
  const stackOfBraces = [];

  for (const character of inputString) {
    const bracesIndex = typesOfBraces.indexOf(character);
    if (bracesIndex > -1) {
      if (bracesIndex % 2 === 0) {
        stackOfBraces.push(bracesIndex + 1);
      } else if (stackOfBraces.pop() !== bracesIndex) {
        return false;
      }
    }
  }
  return stackOfBraces.length === 0;
}

export {
  balancedBraces,
};
