/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
function permutateWithoutRepetitions(permutationOptions) {

  function permute(arr, leftIndex, rightIndex) {
    let string = [...arr];
    let permutes = [];
    if (!(leftIndex === rightIndex)) {
      for (let index = leftIndex; index <= rightIndex; index += 1) {
        [string[leftIndex], string[index]] = [string[index], string[leftIndex]];
        const output = permute(string, leftIndex + 1, rightIndex);
        if (output.length) {
          permutes = [...permutes, ...output];
        }
        [string[leftIndex], string[index]] = [string[index], string[leftIndex]];
      }
    } else {
      return permutes; // = [...permutes, string];
    }
    return permutes;
  }

  return permute(...permutationOptions, 0, permutationOptions.length - 1);
}

export { permutateWithoutRepetitions };
