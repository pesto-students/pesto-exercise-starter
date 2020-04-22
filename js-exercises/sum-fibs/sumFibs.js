function sumFibs(input) {  
  let sum = 0 
  for(let i=0; sum<=input; i++) {
    let generatedFibo = calculateFibo(i) 
    if(generatedFibo % 2 !== 0) {
        if(generatedFibo <= input){
        sum = sum + generatedFibo
        }
    }
  }
  return sum
}
function calculateFibo(fiboInputValue, memoizedObject) {
  memoizedObject = memoizedObject || {}
  if(memoizedObject[fiboInputValue]) {
    return memoizedObject[fiboInputValue]
  }
  if(fiboInputValue <= 1) {
    return 1
  }
  return memoizedObject[fiboInputValue] = calculateFibo(fiboInputValue -1 , memoizedObject) + calculateFibo(fiboInputValue -2 , memoizedObject)
}

export {
  sumFibs,
};
