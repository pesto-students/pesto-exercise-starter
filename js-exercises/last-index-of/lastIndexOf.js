
function lastIndexOf(...args) {
  // eslint-disable-next-line camelcase
  const elementToSearch = args[0];
  const array = args[1];
  let occurancePosition = -1;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementToSearch) occurancePosition = i;
  }
  return occurancePosition;
}

export {
  lastIndexOf,
};
