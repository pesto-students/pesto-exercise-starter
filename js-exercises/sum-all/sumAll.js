function sumAll(x) {
  var sum=Number(0);
  if(x[0]<x[1])
  {
    for (let i =x[0]; i<x[1]+1;i++ )
    sum+=Number(i);
  }else
  {
    for (let i =x[1]; i<x[0]+1;i++ )
    sum+=Number(i);
  }
  return sum;
}

export {
  sumAll,
};
