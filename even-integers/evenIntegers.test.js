'uses strict';

import evenIntegers from './evenIntegers';

describe('#evenIntegers', () => {
  test('should return true if all values of integer is even', () => {
    expect(evenIntegers(2222)).toEqual(true);
  });
  test('should return false if any values of integer is not even', () => {
    expect(evenIntegers(2212)).toEqual(false);
  });
  test('should return false if any values of integer is not even, including letters', () => {
    expect(evenIntegers('2248d88864f2222')).toEqual(false);
  });
});
