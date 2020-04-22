
function duplicateLetters(param) {
  let arr=[]
  let string = param.split("")
  for(var j=0;j<string.length;j++){
    let count=1
    for(var k=j+1;k<string.length;k++){
      if(string[j]===string[k]){
        count=count+1
      }
    }
    arr.push(count)
  }
  arr.sort(function(a,b){
    return a-b
  })
  if (arr[arr.length-1]==1){
    return false
  }else{
  return arr[arr.length-1] ;
  }
}
export {
  duplicateLetters,
};
