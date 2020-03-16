function minima(arrayLength, arrayArg) {
  let sortedArray = arrayArg.sort(function(a, b) {
    return a - b;
  });

  return sortedArray.splice(0, arrayLength);
}

export { minima };
