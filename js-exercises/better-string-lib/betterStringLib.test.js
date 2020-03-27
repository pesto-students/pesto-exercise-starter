// import { betterStringLib } from './betterStringLib';
const betterStringLib = require('./betterStringLib');

console.log(betterStringLib);
describe('Better String Library', () => {
  it('reverse of ab', () => {
    expect(betterStringLib.reverse('ab')).toEqual('ba');
  });

  it('reverse of foo 𝌆 bar', () => {
    expect(betterStringLib.reverse('foo 𝌆 bar')).toEqual('rab 𝌆 oof');
  });

  it('reverse of mañana mañana', () => {
    expect(betterStringLib.reverse('mañana mañana')).toEqual('anañam anañam');
  });

  it('equal of a, a', () => {
    expect(betterStringLib.equal('a', 'a')).toEqual(true);
  });

  it('equal of mañana, mañana', () => {
    expect(betterStringLib.equal('mañana', 'mañana')).toEqual(true);
  });
  
});
