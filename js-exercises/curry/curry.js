function curry(fn){
  if(typeof fn!=='function'){
    throw Error('Not A Function');
}
var slice = [].slice;
return function curriedFn(){
  var args = slice.call(arguments);
  if(args.length < fn.length){
    return function(){
      return curriedFn.apply(null, args.concat( slice.call(arguments) ));
    };
  }
  return fn.apply(null, args);
};
}
export {
  curry,
};
