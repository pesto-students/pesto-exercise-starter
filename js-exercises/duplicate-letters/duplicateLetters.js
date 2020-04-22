function duplicateLetters(...args) {
  const str = args[0];
  let count = [];

  str.split("").forEach((item, index, array) => {
    let ans = 0;
    array.forEach((element, elIndex) => {
      if (item === element) {
        ans++;
      }
    });
    count.push({ item: item, count: ans });
  });

  let result = 0;
  count.forEach(item => {
    if (item.count >= result) {
      result = item.count;
    }
  });
  if (result > 1) {
    return result;
  }
  return false;
}

export { duplicateLetters };
