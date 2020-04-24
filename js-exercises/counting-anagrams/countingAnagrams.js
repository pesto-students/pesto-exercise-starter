const countingAnagrams = str => {
  const wordArray = str.split(" ");
  let numAnagrams = 0
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === "-1") continue;
    let matchFound = false
    for (let j = i + 1; j < wordArray.length; j++) {
      if (wordArray[j] === "-1") break
      else
        if (wordArray[i].length === wordArray[j].length) {
          if (compareWords(wordArray[i], wordArray[j])) {
            if (matchFound === false) {
              matchFound = true
              numAnagrams += 1
            }
            wordArray[j] = "-1"
          }
        }
    }
    wordArray[i] = "-1"
  }
  return numAnagrams;
};

const compareWords = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  if (str1.length === 1) return false;
  const str1Obj = {}, str2Obj = {}
  for (let i = 0; i < str1.length; i++) {
    if (str1Obj[str1[i]] === undefined) str1Obj[str1[i]] = 1
    else {
      str1Obj[str1[i]] = str1Obj[str1[i]] + 1
    }

    if (str2Obj[str2[i]] === undefined) str2Obj[str2[i]] = 1
    else {
      str2Obj[str2[i]] = str2Obj[str2[i]] + 1
    }

  }

  if (Object.keys(str1Obj).length !== Object.keys(str2Obj).length) return false

  let isAnagram = true
  for (const [key, val] of Object.entries(str1Obj)) {
    if (val !== str1Obj[key]) {
      isAnagram = false
      break
    }
  }
  return isAnagram;
}
export { countingAnagrams };
