const {
  green,
  red,
  yellowBright,
  greenBright,
  redBright,
  blueBright,
} = require('chalk');
const compose = require('lodash/fp/compose');

module.exports = {
  greenBrightLog: compose(console.log, greenBright),
  redBrightLog: compose(console.log, redBright),
  greenLog: compose(console.log, green),
  redLog: compose(console.log, red),
  yellowBrightLog: compose(console.log, yellowBright),
  warn: compose(console.log, yellowBright),
  error: compose(console.log, redBright),
  info: compose(console.log, blueBright),
  success: compose(console.log, greenBright),
};
