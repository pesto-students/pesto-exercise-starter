function diffArray(array1, array2) {
  return [
    ...array1.filter(element => array2.indexOf(element) === -1),
    ...array2.filter(element => array1.indexOf(element) === -1),
  ];
}

export {
  diffArray,
};
