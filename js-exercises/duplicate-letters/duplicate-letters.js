function duplicateLetters(str) {
  let string_array = {};
  let is_duplicate = false;
  let number_array = [];
  for (let i = 0;i<str.length;i++) {
    string_array[str[i]] = (string_array[str[i]] || 0) + 1;
  }
  for (let i in string_array) {
    if (string_array[i] > 1) {
        is_duplicate = true;
        number_array.push(string_array[i]);
    }
  }
  if (!is_duplicate) {
      return false;
  }
  return Math.max(...number_array);
}
module.exports = duplicateLetters;
