function flipArgs(func,...args) {
  let arr = [];
  for (let i = args.length; i >= 0; i--) {
    arr.push(args[i])
  }
  func(arr.join(','))
}
export {
  flipArgs,
};