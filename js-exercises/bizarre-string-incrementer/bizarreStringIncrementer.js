function bizarreStringIncrementer(string) {
  const trailingNumber = string.match(/\d+$/);
  if (trailingNumber === null) {
    return `${string} + 1`;
  }
  const returnString = string.replace(/\d+$/, '');
  let addNumber = parseInt(trailingNumber[0], 10) + 1;
  if (addNumber.toString().length < trailingNumber[0].length) {
    const diffLength = trailingNumber[0].length - addNumber.toString().length;
    for (let i = 0; i < diffLength; i += 1) {
      addNumber = `0 ${addNumber.toString()}`;
    }
  }
  return returnString + addNumber;
}

export {
  bizarreStringIncrementer,
};
