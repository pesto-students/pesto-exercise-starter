function chunkArrayInGroups(array, chunkSize) {
  const chunked = [];
  for (let element of array) {
    const lastElement = chunked[chunked.length - 1];
    if (!lastElement || lastElement.length === chunkSize) {
      chunked.push([element]);
    } else {
      lastElement.push(element);
    }
  }
  return chunked;
}

export { chunkArrayInGroups };
