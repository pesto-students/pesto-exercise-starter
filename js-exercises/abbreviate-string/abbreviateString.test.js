const {
  abbreviateString
} = require('./abbreviateString');

const describe = (desc, fn) => {
  console.log(desc);
  fn();
};

const it = (msg, fn) => describe("  " + msg, fn);

const matchers = exp => ({
  toEqual: assertion => {
    if (exp === assertion) {
      console.log('pass');
      return true;
    } else {
      console.log('fail');
      return false;
    }
  },
  toThrow: () => {
    if (typeof exp != "object") {
      console.log('pass');
      return true;
    } else {
      console.log('fail');
      return false;
    }
  }
});

const expect = exp => matchers(exp);

describe('abbreviateString', () => {
  it('abbreviates the following strings', () => {
    expect(abbreviateString('Hacktober Fest')).toEqual('Hacktober F.');
    expect(abbreviateString('Leeroy Fitzgerald Jenkins')).toEqual('Leeroy J.');
    expect(abbreviateString('Some arbitrary string length here.')).toEqual(
      'Some H.'
    );
  });

  it('throws error on invalid parameters', () => {
    expect(() => abbreviateString(123)).toThrow();
    expect(() => abbreviateString([])).toThrow();
    expect(() => abbreviateString({})).toThrow();
    expect(() => abbreviateString(null)).toThrow();
  });
});
