
function removeFalsyValues(array) {
  const checkTruthyValue = (value) => value;
  return array.filter(checkTruthyValue);
}

export {
  removeFalsyValues,
};
