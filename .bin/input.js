const readline = require('readline');

function input(question) {
  const IReadline = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((res, rej) => {
    IReadline.question(question, answer => {
      IReadline.close();
      res(answer.trim());
    });
  });
}

module.exports = {
  input,
}