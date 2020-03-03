function duplicateLetters(...args) {
  const str = args[0];
  let count = 0;

  str.split("").forEach((item, index, array) => {
    if (array.lastIndexOf(item) !== index) {
      count++;
    }
  });

  const result = count ? console.log("found ", count) : false;
  return result;
}

export { duplicateLetters };
