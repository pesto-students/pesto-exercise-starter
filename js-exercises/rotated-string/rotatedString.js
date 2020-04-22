const rotatedString = (str1, str2) => {

   let ifRotatedString = false;
   
   for(let i = 1 ; i < str1.length ; i++){
    
      let removeCharacters = str1.split("").splice(0,i);
      let rotateStringArray = str1.split("").slice(i);
      rotateStringArray.push(...removeCharacters);

      let rotatedString = rotateStringArray.join("");

      if(rotatedString === str2){
         ifRotatedString = true;
         break;
      }
      
     
   }

   return ifRotatedString;

};

export { rotatedString };
