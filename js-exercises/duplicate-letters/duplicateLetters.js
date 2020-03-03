
function duplicateLetters(...args) {
  var str=arguments[0];
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for(let char of str){
      if(charMap[char]){
          charMap[char]++;
      }else{
          charMap[char] = 1;
      }
  }

  for(let char in charMap){
      if(charMap[char] > max){
          max = charMap[char];
          maxChar = char;
      }
  }

    if(max==1)
    return false;
  return max; 
}


export {
  duplicateLetters,
};
