const { ArgumentParser } = require('argparse');

module.exports = function () {
  const parser = new ArgumentParser({
    addHelp: true,
  });
  parser.addArgument(['-q', '--question'], {
    action: 'append',
    required: true,
    help: 'Please specify the question name.',
  });
  return parser.parseArgs();
};
