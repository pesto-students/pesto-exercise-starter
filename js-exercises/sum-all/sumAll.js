function sumAll(arr) {
  let firstElement = arr[0] ;
  let lastElement= arr[1] ;
  let result = [];
  result[0] = 0;
  if(arr[0]>arr[1]){
     firstElement = arr[1] ;
     lastElement= arr[0] ;
  }
  console.log(firstElement);
  console.log(lastElement);
  for(let i= firstElement;i<=lastElement;i++){
  	result[0] = result[0]  + i;
  }
  return result[0];
}

export {
  sumAll,
};
