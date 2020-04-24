function longestWordInString(...args) {
  var word_array = args[0].split(' ')
  var max_word_length = 0
  for (var i = 0; i < word_array.length; i++) {
    if (word_array[i].length > max_word_length) {
      max_word_length = word_array[i].length
    }
  }
  return max_word_length;
}

longestWordInString('The quick brown fox jumped over the lazy dog')

module.exports = { longestWordInString };
