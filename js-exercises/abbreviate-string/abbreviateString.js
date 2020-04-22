function abbreviateString(str) {
  if(typeof str!=string || str==null || str.includes("[]") || str.includes("{}")){
    throw "Not A Valid String";
  }
  let string =str.split(" ");
  return string[0]+" "+string[string.length-1].split("")[0].toUpperCase()+".";

}

export { abbreviateString };
