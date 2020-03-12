/* eslint-disable comma-dangle */
function permutateWithoutRepetitions(arrToPermute) {
  const permutingArr = [];

  for (let i = 0; i < arrToPermute.length; i++) {
    const remainingArr = permutateWithoutRepetitions(
      arrToPermute.slice(0, i).concat(arrToPermute.slice(i + 1))
    );
    if (!remainingArr.length) {
      permutingArr.push([arrToPermute[i]]);
    } else {
      for (let j = 0; j < remainingArr.length; j++) {
        permutingArr.push([arrToPermute[i]].concat(remainingArr[j]));
      }
    }
  }
  return permutingArr;
}

export { permutateWithoutRepetitions };
