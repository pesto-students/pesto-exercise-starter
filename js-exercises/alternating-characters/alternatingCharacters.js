
function deletionsForAlternateCharacters(string) {
  let count = 0;
  for (let index = 0; index < string.length - 1; index += 1) {
    if (!(string[index].localeCompare(string[index + 1]))) {
      // string.delete(index + 1);
      count += 1;
    }
  }
  return count;
}

function alternatingCharacters(arrayStrings) {
  let arrayCount = [];
  arrayCount = arrayStrings.map(deletionsForAlternateCharacters);
  // arrayCount.push(arrayStrings.foreach(deletionsForAlternate));
  return arrayCount;
}

console.log(alternatingCharacters(['AAAA', 'BBBBB', 'ABABABAB', 'BABABA', 'AAABBB']));

export { alternatingCharacters };
