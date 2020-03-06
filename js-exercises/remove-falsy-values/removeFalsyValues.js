
function removeFalsyValues(array) {
  const returnObj = array.filter((value) => {
    if (value) {
      return true;
    }
    return false;
  });
  return returnObj;
}

export {
  removeFalsyValues,
};
