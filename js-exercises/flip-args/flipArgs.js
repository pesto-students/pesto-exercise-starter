const flipArgs = (func) => (...args) => func(...args.reverse())

export {
  flipArgs
}