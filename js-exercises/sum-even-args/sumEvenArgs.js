const sumEvenArgs = (...args) => {
  let resultSum = 0;
  for(let i of args){
    if( i%2 == 0 ) resultSum += i;
  }
  return resultSum;
};

export { sumEvenArgs };
