function flipArgs(...args) {
  const flippedArgs = [];
  for (let index = args.length-1; index>=0; index--) {
    flippedArgs.push(args[index])
  }
  return flippedArgs;
}
export{
  flipArgs
}