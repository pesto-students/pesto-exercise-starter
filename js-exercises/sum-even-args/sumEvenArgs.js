const sumEvenArgs = (...args) => {
  let sum=0;
  args.map((value)=>{
    if(value%2==0){
      sum=sum+value
    }
  })
  return sum;
};

export { sumEvenArgs };
