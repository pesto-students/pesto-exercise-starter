// write your own test cases
import { flipArgs} from './flipArgs';

describe('limitFunctionCallCount', () => {
  it('should return a flipped arguments', () => {
    expect(flipArgs('a','b','c','d')).toStrictEqual([ 'd', 'c', 'b', 'a' ])
  });
 
});
