const rotatedString = (str1, str2) => {
  if(str1.length!= str2.length || str1 === str2){
    return false;
  }

  const checkIndexIsExist = function(string ,argument){

      let words = [];
      let stringArray = string.split('');
      if(stringArray.indexOf(argument)-1 === -1){
          words['previous'] =  stringArray[stringArray.length-1];
      }else{
         words['previous'] =  stringArray[stringArray.indexOf(argument)-1 ];
      }
      if(stringArray.indexOf(argument)+1 >= stringArray.length){
          words['upcoming'] =  stringArray[0];
      }else{
         words['upcoming'] =  stringArray[stringArray.indexOf(argument)+1];
      }
      return words;
  }

  let stringCheckEquality = str2.split('');
  for(let i=0;i<str1.length-1;i++){
      if(!stringCheckEquality.includes(str1[i])){
        return false;
      }

      let stringFirst = checkIndexIsExist(str1,str1[i]);
      let stringSecond = checkIndexIsExist(str2,str1[i]);
      if(stringFirst['previous'] === stringSecond['previous'] && stringFirst['upcoming'] === stringSecond['upcoming'] ){
        return true;
      }else{
        return false;
      }

    }

};



export { rotatedString };
