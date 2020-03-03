function sumAll(arr) {

  let smallestNumber,
      largestNumber,
      total = 0;
      
  if(arr[0] > arr[1]){
    smallestNumber = arr[1];
    largestNumber = arr[0];
  } else if(arr[1] > arr[0]) {
    smallestNumber = arr[0];
    largestNumber = arr[1];
  } else {
     return arr[0] + arr[1];
  }

  for (let i = smallestNumber ; i <= largestNumber ; i++){
    total += i;
  }

  return total;
  
}

export {
  sumAll
};
