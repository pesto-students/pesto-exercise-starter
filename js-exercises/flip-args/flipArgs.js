function flipArgs(func) {
  return (n)=>{
    return func(Array.from(n).reverse());
  } 
}
export {
  flipArgs,
};