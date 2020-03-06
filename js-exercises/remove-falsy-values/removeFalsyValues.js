function removeFalsyValues(array) {
  // to use best practice that arguments shouldn't be mutated
  let newCopyOfInputArray = Array.from(array);
  return newCopyOfInputArray.filter((element) => Boolean(element));
}

export {
  removeFalsyValues,
};