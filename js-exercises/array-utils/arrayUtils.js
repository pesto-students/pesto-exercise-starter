function forEach(array,callback){
  for (let i = 0; i < array.length; i++) { 
    callback(array[i]);
  }
}

function map(array,callback){
  let arr=[]
  for (let i = 0; i < array.length; i++) { 
    arr.push(callback(array[i]));
  }
  return arr;
}

function filter(array,callback){
  let arr=[]
  for (let i = 0; i < array.length; i++) { 
   if(callback(array[i])){
    arr.push(array[i]);
   }
  }
  return arr;
}

function reduce(array,callback,num){
  if(num==undefined){
    return callback(array[i]);
  } else{
    return callback(array[i])+num;
  }
}
export {
  forEach,
  map,
  filter,
  reduce,
}