function chunkArrayInGroups(array, chunkSize) {
  let start=0;
  let end=chunkSize;
  let arr=[]
  while(start<=array.length-1){
    arr.push(array.slice(start,end));
    start=end;
    end=2*end;
  }
  return arr;
}
export {
  chunkArrayInGroups,
};
