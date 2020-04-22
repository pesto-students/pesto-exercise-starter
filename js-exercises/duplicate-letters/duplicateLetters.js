
function duplicateLetters(...args) {

  let duplicates = false,
      maxDuplicatesCount = 1;

  let sortedStr = args[0].split("").sort().join("");

  for(let i = 0 ;  i < sortedStr.length ; i++){

    let count = 1;

    for(let j = i + 1 ; j < sortedStr.length ; j++){
      
      if(sortedStr[i] === sortedStr[j]){

         count += 1;

         if(count > maxDuplicatesCount){
           maxDuplicatesCount = count;
         }

         if(!duplicates){
          duplicates = true;
         }

      } else {
         break;
      }

    }
     
  }


  if(duplicates){
     return maxDuplicatesCount;
  } else {
     return false;
  }

}

export {
  duplicateLetters,
};
