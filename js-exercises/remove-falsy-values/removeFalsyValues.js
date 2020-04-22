function removeFalsyValues(array) {
  return array.reduce((accumulator, element) => {
    if (element) {
      accumulator.push(element)
    }
    return accumulator;
  }, [])
}

export {
  removeFalsyValues,
};
