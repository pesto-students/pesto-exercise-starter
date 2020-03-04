function forEach(array,callback){
  if(typeof callback!='function') return ;
  for(let index=0;index<array.length;index++){
     callback(array[index],index,array)
  }

}
function map(array,callback){
  if(typeof callback!='function') return ;
  let resultArr=[]
  for(let index=0;index<array.length;index++){
     resultArr.push(callback(array[index],index,array))
  }
  return resultArr
}
const filter=function(array,callbackFunction){
  let filteredArr=[];
  for(let index=0;index<array.length;index++){

      if(callbackFunction(array[index]),index,array)
        filteredArr.push(array[index])
    
  }
  return filteredArr
}
function reduce(array, callBack, initialValueOfAccumulator=array[0]) {
  if(typeof callback!='function') return ;
  let tempAccumulator =initialValueOfAccumulator;
  for (let index = 0; index < array.length; i++) {
    tempAccumulator = callBack(tempAccumulator, array[index], index, array);
  }
  return tempAccumulator;
}
export {
  forEach,
  map,
  filter,
  reduce,
}