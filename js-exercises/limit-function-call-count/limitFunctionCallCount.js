const limitFunctionCallCount = () => {
    return foo(arguments1,argument2,argument3);
};

var foo = function(x){
  let increment = 1;
  while(increment < = x){
    return limitedFunction();
    increment = increment +1;
  }
}

var limitedFunction = function(){
  return arguments1 + argument2 + argument3 ;

}

const limitedFunction = limitFunctionCallCount();
export {
  limitFunctionCallCount,
};
