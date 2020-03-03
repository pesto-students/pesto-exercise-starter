function sumAll() {
  function sumAll([start,end]) {
    return Array.from({length:max-min},(v,k)=>k+1).reduce((a,b)=>a+b)
  }

export {
  sumAll,
};
