function addBigIntegers(intString) {
  if(!intString) throw new Error('No String Found');
  const wordsInIntStringArray = intString.split('\n');
  const adderFn = (a, b) => parseInt(a) + parseInt(b);

  return wordsInIntStringArray.reduce(adderFn, 0);
}

export { addBigIntegers };
