const sumEvenArgs = (...args) => {
  return args.filter((v, i) => i % 2 === 1).reduce((a, v) => a + v);
};



module.exports = {
  sumEvenArgs
};