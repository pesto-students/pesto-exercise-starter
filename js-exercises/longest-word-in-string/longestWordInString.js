function longestWordInString(...args) {
  let arr =[]
  args.map(function(val){
    let string=val.split(" ");
    string.forEach(val => {
      arr.push(val.length)
    });
  })
  arr.sort(function(a,b){
    return a-b;
  })
  return arr[arr.length-1];
}
export { longestWordInString };
