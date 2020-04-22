const describe = (desc, fn) => {
  console.log(desc);
  fn();
};

const test = (msg, fn) => describe("  " + msg, fn);

const matchers = exp => ({
  toBe: assertion => {
    if (exp === assertion) {
      console.log("pass");
      return true;
    } else {
      console.log("fail");
      return false;
    }
  }
});

const expect = exp => matchers(exp);


module.exports = {
  describe,
  expect,
  test,
  matchers
};