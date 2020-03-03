function duplicateLetters(args) {
  const arr = args.split("");
  const freq = {};

  for (let i = 0; i < arr.length; i++) {
    const character = arr[i];
    if (freq[character]) {
      freq[character] = freq[character] + 1;
    } else {
      freq[character] = 1;
    }
  }

  if (Object.keys(freq).length === 0) {
    return false;
  }

  const valArr = Object.values(freq);
  const max = Math.max(...valArr);
  if (max === 1) {
    return false;
  }
  return max;
}

export { duplicateLetters };
