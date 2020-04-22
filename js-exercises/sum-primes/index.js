const A = 10;

function solution(N){
  let fullArr = [];
  for(let i=0; i<= N; i++) isPrime(i) ? fullArr.push(i) : '';
  return fullArr.reduce(arrSum);
}
const isPrime = num => {
  for(let i = 2; i < num; i++) 
    if(num % i === 0) return false;
  return num > 1;
}

const arrSum = (total,current) => total + current;
console.log(solution(A));