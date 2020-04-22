function sumAll(arr) {
  const end = Math.max(...arr);
  const start = Math.min(...arr);
  return ((end-start+1)/2)*(start+end);
 }

export {
  sumAll,
};
