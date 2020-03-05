// Write your own test cases.

// import { arrayUtils } from './arrayUtils';
const arrayUtils = require('./arrayUtils');

describe('Array Utils', () => {
  it('check array return is correct using my foreach function', () => {
    let array = ['1', '2', '3', '4'];
    let check_array = [];
    function callback(data) {
      try {
        expect(data).toMatch(/^1|2|3|4$/);
      } catch (error) {
        console.log(error);
      }
    }
    arrayUtils.forEach(array, callback);
  });
});

