const rotatedString = (str1, str2) => {
  let concatString=str1+str1;
  if(str1==str2){
    return false;
  }else if(concatString.includes(str2)){
    return true;
  }else{
    return false;
  }
};

export { rotatedString };
