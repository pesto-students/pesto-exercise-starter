
function duplicateLetters(inputString) {
  let stringArray = inputString.split('')
  let constructedObject = {}
  let duplicateCount = 0
  for( let element of stringArray) {
    if(!Object.keys(constructedObject).includes(element)) {
      constructedObject[element] = 1
    } else {
      constructedObject[element] ++
      duplicateCount++
    }
  }
  return duplicateCount ? Math.max(...Object.values(constructedObject)) : false
}

export {
  duplicateLetters,
};

/* 
Author : Parvinder Singh Saluja
Time Taken : 20 mins
*/