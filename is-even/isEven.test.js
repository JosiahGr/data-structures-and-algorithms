'use strict';

import isEven from './isEven';

describe('#isEven', () => {
  test('Should return true for even series of integers', () => {
    expect(isEven(222)).toEqual(true);
    expect(isEven(4682)).toEqual(true);
  });
  test('Should return false for uneven series of integers', () => {
    expect(isEven(221)).toEqual(false);
    expect(isEven(4699999122)).toEqual(false);
  });
  test('Should return false for NaN', () => {
    expect(isEven(221, 'd')).toEqual(false);
    expect(isEven('2222d')).toEqual(false);
  });
});
