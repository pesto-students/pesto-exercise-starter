import { myPromise } from './myPromise';

describe('Template Test', () => {
  test('Template Test', () => {
    expect(myPromise.resolve('Bhargav').value).toBe('Bhargav');
  });
});
