const parseMs = ms => {
  const date = new Date(ms);
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds() % 1000;
  const microseconds = Math.floor(date.getMilliseconds() / 1000);
  const nanoseconds = Math.floor(microseconds / 1000);
  // const microseconds  = date.getMi
  const obj = {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    microseconds,
    nanoseconds,
  };
  return obj;
};

// console.log(parseMs(1337000001));

export { parseMs };
