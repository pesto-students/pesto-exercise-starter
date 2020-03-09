function balancedBraces(inputString) {
  const outputStack = [];

  const openingBrace = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  const closingBrace = [')', ']', '}'];

  for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString[i];

    if (openingBrace[currentChar]) {
      outputStack.push(currentChar);
    } else if (closingBrace.indexOf(currentChar) >= 0) {
      if (openingBrace[outputStack.pop()] !== currentChar) return false;
    }
  }
  return outputStack.length === 0;
}

export { balancedBraces };
