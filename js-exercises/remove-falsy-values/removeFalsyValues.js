function removeFalsyValues(array) {

  return array.filter(itm => !!itm);
}

module.exports = {
  removeFalsyValues
};