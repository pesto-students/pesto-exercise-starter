const CONSTANTS = {
  msInDay: 24 * 3600 * 1000,
  msInHour: 3600 * 1000,
  msInMinutes: 60 * 1000,
  msInSeconds: 1000,
  msInMilliseconds: 1,
};

const getDays = (ms) => Math.floor(ms / CONSTANTS.msInDay);

const getHours = (ms) => Math.floor(ms / CONSTANTS.msInHour);

const getMinutes = (ms) => Math.floor(ms / CONSTANTS.msInMinutes);

const getSeconds = (ms) => Math.floor(ms / CONSTANTS.msInSeconds);

const getMilliseconds = (ms) => Math.floor(ms / CONSTANTS.msInMilliseconds);


const getDecimalPart = (num) => {
  const arr = (`${num}`).split('.');
  if (arr.length === 2) {
    return parseFloat(`0.${arr[1]}`);
  }
  return 0;
};

const parseMs = ms => {
  let rem = Math.floor(ms);
  const days = getDays(rem);
  rem -= (days * CONSTANTS.msInDay);
  const hours = getHours(rem);
  rem -= (hours * CONSTANTS.msInHour);
  const minutes = getMinutes(rem);
  rem -= (minutes * CONSTANTS.msInMinutes);
  const seconds = getSeconds(rem);
  rem -= (seconds * CONSTANTS.msInSeconds);
  const milliseconds = getMilliseconds(rem);
  rem -= (milliseconds * CONSTANTS.msInMilliseconds);

  let afterDecimal = getDecimalPart(ms);
  const microseconds = Math.floor(afterDecimal * 1000);
  afterDecimal = getDecimalPart(afterDecimal * 1000);
  const nanoseconds = Math.floor(afterDecimal * 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    microseconds,
    nanoseconds,
  };
};

export { parseMs };
