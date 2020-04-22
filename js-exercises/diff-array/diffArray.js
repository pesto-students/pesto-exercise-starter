function diffArray(arrayOne, arrayTwo) {
  return arrayOne
    .filter(x => !arrayTwo.includes(x))
    .concat(arrayTwo.filter(x => !arrayOne.includes(x)));
}

export { diffArray };
