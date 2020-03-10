
function curry(item1, item2){
  if(parseInt(item1) && parseInt(item2)){return parseInt(item1+item2)};
  return "Invalid argument passed to curry function";
}

export {
  curry,
};
