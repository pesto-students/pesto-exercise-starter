function dropElements(elements, predicate) {
  const resultArr = [];
  for (let i = 0; i < elements.length; i++) {
    if(predicate(elements[i])) {
      resultArr.push(elements[i]);
    }
  }
  return resultArr;
}

export { dropElements };
