function sumFibs(num) {

  let i = 2,
      sum = 0,
      fibArr = [0,1];

 for(i ; i <= num ; i++){ 
     fibArr.push(fibArr[i-1]+fibArr[i-2]);
 }

 for(let j = 0; j < fibArr.length ; j++){
    if(fibArr[j]%2 === 1 && fibArr[j] < num){
      sum += fibArr[j];
    }
 }

 return sum;

}

export {
  sumFibs
}