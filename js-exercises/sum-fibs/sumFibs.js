function sumFibs(n) {
  let fibo = [];
  let result = 0;
  for(var i=0; i <= n; i++){
    
    if(fibo.length < 2) {
      result += i;
      fibo.push(i);
      continue;
    }
    let sum = fibo[fibo.length-1] + fibo[fibo.length-2];
    fibo.push(sum);
    
    if (sum > n) {
      break;
    }
    
    if (sum%2 !== 0) {
      result += sum;
    }

  }
  return result;
}

export {
  sumFibs,
};
