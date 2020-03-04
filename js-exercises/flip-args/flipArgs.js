const flipArgs = (inputFunction) => (...args) => inputFunction(...args.reverse())

export {
  flipArgs
}
