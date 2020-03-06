
function removeFalsyValues(array) {
  return array.filter((element) => element && element)
}

export {
  removeFalsyValues,
};
