const cmd = require('node-cmd');

const cmdGet = (command, { verbose = true } = {}) => new Promise((resolve, reject) => {
  cmd.get(command, (err, data, stderr) => {
    if (err) {
      if (verbose) { 
        console.error(stderr);
      }
      reject(err);
    }
    if (verbose) {
      console.log(data);
    }
    resolve(data);
  });
});

module.exports = {
  cmdGet,
}