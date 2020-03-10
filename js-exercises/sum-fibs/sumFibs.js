function sumFibs(number) {
  let Numbers = [];
  Numbers[0] = 1;

  let fab = function(first,second){


    if(second == number || second < number){
      Numbers.push(second);
      return fab(second,second+first);
    }
  }
  fab(1,1);
  let oddNumbers = Numbers.filter(Numbers => Numbers%2!==0);

  return oddNumbers.reduce((a, b) => a + b, 0);;

}

export {
  sumFibs,
};
