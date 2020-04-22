function sumAll(args) {
  let sum = 0;
  let maxNum = (args[0] > args[1]) ? args[0] : args[1];
  let minNum = (args[0] > args[1]) ? args[1] : args[0];
  for (let i = minNum; i<=maxNum; i++) sum+=i;
  return sum;  
}

export {
  sumAll,
};