function diffArray(arr1,arr2) {
  let resultArray = [];
  for (let i of arr1) {
    if(!arr2.includes(i)) resultArray.push(i);
  }
  for (let i of arr2) {
    if(!arr1.includes(i)) resultArray.push(i);
  }
  return resultArray;
}

export {
  diffArray,
};
