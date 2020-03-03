const N = "ababcb";
//const N = "aba";
//const N = "ababcb";
function checkDuplicate(str,letter){
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) 
    {
        if (str.charAt(position) == letter) 
          {
            letter_Count += 1;
          }
      }
      return letter_Count;
}

function solution(N){
  let arr = N.split("");
  let el;
  let result = 0;
  for (el in arr){
    if(result < checkDuplicate(N,arr[el])){
      result = checkDuplicate(N,arr[el]);
    }
  }
  if(result === 1){
    result = false;
  }
  return result;
}
console.log(solution(N));
