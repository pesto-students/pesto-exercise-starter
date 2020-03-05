var flipped = function() {
  var arrayExpected =[];
  var result =  reverseArray(arguments);
  return result;
};

var reverseArray = function() {
  var newArgument = [];
  var increment =0;
  for(var i=arguments.length-1;i>=0;i--){

    newArgument[increment] = arguments[i];
    increment = increment+1;
  }
  return newArgument;
}


export {
  flipped,
};
