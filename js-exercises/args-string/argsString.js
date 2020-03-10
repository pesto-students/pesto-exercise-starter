const argsString = (message, args) => {
   let result = [];
   result[0] = '';
   let increment = 0;
   for(let i =0 ;i < message.length;i++){
     if(message[i] === '{' && message[i+1] === '}'){
           result[0] = result[0] + args[increment];
          increment = increment +1 ;
       }else{
           if(message[i] !== '}'){
              result[0] = result[0] + message[i] ;
           }
       }
    }
   return result[0];

 };

export { argsString };
