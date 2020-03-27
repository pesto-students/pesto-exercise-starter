
function reverse(string) {
  const regexSymbolWithCombiningMarks = /([\0-\u02FF\u0370-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uDC00-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF])([\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g;
  const regexSurrogatePair = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;
  const stringProcess = string.replace(regexSymbolWithCombiningMarks, ($0, $1, $2) => reverse($2) + $1).replace(regexSurrogatePair, '$2$1');

  let result = '';
  let index = stringProcess.length;
  while (index) {
    index -= 1;
    result += stringProcess.charAt(index);
  }
  return result;
}

function equal(stringA, stringB) {
  return stringA.normalize('NFC') === stringB.normalize('NFC');
}

module.exports = {
  equal,
  reverse,
};
