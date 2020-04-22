
function removeFalsyValues(array) {
  let resultArray = [];
  for(let i of array) {
    if(i) resultArray.push(i);
  }
  return resultArray;
}

export {
  removeFalsyValues,
};
