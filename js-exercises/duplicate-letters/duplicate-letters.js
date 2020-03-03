function maxChar(str) {
  const charMap = {};
  let max = 0;
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
    }
  }
  if (max == 1) {
    return "False";
  }
  return max;
}
