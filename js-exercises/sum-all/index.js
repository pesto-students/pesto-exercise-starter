//const N = [15,9];
const N = [5,9];
//const N = [8,3];

let addVal = ( acc, cur ) => acc + cur;

function solution(N){
  const Arr = sort(N);
  const fullArr = [];
  for( let i=Arr[0]; i <= Arr[1]; i++){
    fullArr.push(i);
  }
  const add = fullArr.reduce(addVal);
  return add;
}

function sort(N){
  let result = [];
  let lb = N[0];
  let hb = N[1];

  if(lb > hb){
    result.push(hb);
    result.push(lb);
  }else{
    result.push(lb);
    result.push(hb);
  }
  return result;
}

console.log(solution(N));