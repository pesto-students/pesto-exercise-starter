  const sumEvenArgs = (...args) => {
    let sum = [];
    sum[0] = 0;
    args.forEach((element) => {
      if(element %2 ==0){
        sum[0]  = element + sum[0] ;
      }
  })

    return sum[0] ;
  };

export { sumEvenArgs };
