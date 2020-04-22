function addBigIntegers(intString) {
  let result = [];
  result[0]= 0;
  let words=intString.split('\n');
   for(let word of words){
     result[0] =  result[0] + parseInt(word);
  }
  return result[0].toPrecision().toString();
}

export { addBigIntegers };
