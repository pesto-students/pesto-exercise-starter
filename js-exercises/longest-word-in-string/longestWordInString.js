import { max } from 'mathjs';
// for me max is showing wrong answer that's why i used looping ;
/*
function longestWordInString(...str) {
  var sentenceToCheck = str.toString();
  let commaSepratedWord = sentenceToCheck.split(" ");
  let storingLength =[];
  let increment =0;
  for(let longestWord of commaSepratedWord){
    storingLength[increment] = longestWord.length ;
    increment = increment + 1;
  }
 return  MATH.max(storingLength);
}
*/




function longestWordInString(...str) {
  var sentenceToCheck = str.toString();
  let commaSepratedWord = sentenceToCheck.split(" ");
  let storingLength =[];
  let increment =0;
  let newValue = 0;
  let result = [];
  for(let longestWord of commaSepratedWord){
    storingLength[increment] = longestWord.length ;
    if(increment >0){
      newValue = storingLength[increment];
      if(result[0] > newValue){
         result[0] =result[0];
       }else{
          result[0] = newValue;
       }
    }else{
      result[0] =longestWord.length;
    }
    increment = increment + 1;
  }
 return  result[0];
}

export {
  longestWordInString,
};
