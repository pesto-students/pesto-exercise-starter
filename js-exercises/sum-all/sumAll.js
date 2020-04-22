function sumAll() {
  args = args.sort((a,b)=>a-b);
  if(args.length>2){return "invalid argument"}
  var lowestNumber = args[0];
  var highestNumber = args[1]
  var sumOfAll=0;
  while(lowestNumber<=highestNumber){
    sumOfAll+=lowestNumber;
    lowestNumber++;
  }
  
  return sumOfAll;
    
}

export {
  sumAll,
};
