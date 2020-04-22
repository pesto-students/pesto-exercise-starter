function flipArgs(...args) {
  const flippedArgs = [];
  for (let i = 0; i < args.length; i++) {
    flippedArgs.unshift(args[i]);
  }
  return flippedArgs;
}

export { flipArgs };
