const N = 10;

function solution(N) {
  var fib0 = 0;
  var fib1 = 1;
  var fib = 1;
  var sum = fib0;
  while ( fib <= N){
    if (fib % 2) {
        sum += fib1;
    }
    fib = fib0 + fib1;
    fib1 += fib0;
    fib0 = fib1 - fib0;
  }
  
  return sum;
}

console.log(solution(N));