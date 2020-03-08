import { deepCopyObject } from './deepCopyObject';

describe('deepCopyObject', () => {
  it('returns a deep copy of given object', () => {
    const myObj = {
      subObj: {
        key: 'value',
      },
      array: ['a', 'b', 1, 2],
      string: 'string',
      number: 12345,
      bool: false,
      nul: null,
      date: new Date(1),
      undef: undefined,
      inf: Infinity,
      re: /.*/,
    };

    const yourObj = deepCopyObject(myObj);

    yourObj.subObj.key = 'new value';
    yourObj.array[1] = 'c';
    yourObj.array[3] = 3;
    yourObj.string = 'new string';
    yourObj.number = 54321;
    yourObj.bool = true;
    yourObj.nul = myObj.subObj;
    yourObj.date = new Date(0);


    expect(yourObj.subObj.key).toEqual('new value');
    expect(myObj.subObj.key).toEqual('value');
    expect(yourObj.array).toEqual(['a', 'c', 1, 3]);
    expect(myObj.array).toEqual(['a', 'b', 1, 2]);
    expect(yourObj.string).toEqual('new string');
    expect(myObj.string).toEqual('string');
    expect(yourObj.number).toEqual(54321);
    expect(myObj.number).toEqual(12345);
    expect(yourObj.date).toEqual(new Date(0));
    expect(myObj.date).toEqual(new Date(1));
    expect(yourObj.undef).toEqual(undefined);
    expect(yourObj.inf).toEqual(Infinity);
    expect(yourObj.re).toEqual(/.*/);
  });

  it('returns copy of other data types', () => {
    expect(deepCopyObject(4)).toEqual(4);
    expect(deepCopyObject('string!')).toEqual('string!');
    expect(deepCopyObject(true)).toBe(true);
    expect(deepCopyObject(null)).toBeNull();
  });
});
