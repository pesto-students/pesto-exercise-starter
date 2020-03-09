function chunkArrayInGroups(inputArr, chunkSize) {
  const resultArr = [];
  for (let i = 0, len = inputArr.length; i < len; i += chunkSize) {
    resultArr.push(inputArr.slice(0, chunkSize));
    inputArr = inputArr.slice(chunkSize);
  }
  return resultArr;
}

export { chunkArrayInGroups };
