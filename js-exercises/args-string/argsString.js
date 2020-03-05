const argsString = (message, args) => {
   const checkCurrlyBracket = function(argument){
     let increment = 0;
     let storingIndex = [];
     storingIndex['count'] = 0 ;
     for(let i=0;i<argument.length;i++){
       if(argument[i]==='{' && argument[i+1] === '}'){
         storingIndex['count'] = storingIndex['count'] +1;
         storingIndex[increment] = i;
         increment = increment +1;
       }
     }
     return storingIndex;
   }

   String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
    }

  let result =   checkCurrlyBracket(message);
  if(result['count'] === 0){
    return message;
  }

  let increment = 0;
  let finalResult =[];
  let index= 0;
  finalResult[0] = message;
  while( increment < result['count']){

    if(increment > 0){
         index =    result[increment] +  args[increment-1].length;
    }else{
         index =    result[increment] ;
    }

    finalResult[0] = finalResult[0].replaceAt(index + args[increment].length ,args[increment]);
    finalResult[0] = finalResult[0];
    increment =  increment + 1;
  }
  return finalResult[0];

};

export { argsString };
