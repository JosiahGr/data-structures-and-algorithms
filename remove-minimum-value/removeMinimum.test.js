'use strict';

import removeMinimum from './removeMinimum';

describe('#removeMinimum', () => {
  test('Should remove the smallest integer in array', () => {
    expect(removeMinimum([1, 2, 3, 4])).toEqual([2, 3, 4]);
    expect(removeMinimum([5, 19, 23, 4])).toEqual([5, 19, 23]);
    expect(removeMinimum([])).toEqual([]);
  });
  test('Should remove the first index integer if duplicate value exists', () => {
    expect(removeMinimum([1, 2, 3, 4, 1])).toEqual([2, 3, 4, 1]);
    expect(removeMinimum([4, 5, 19, 23, 4])).toEqual([5, 19, 23, 4]);
    expect(removeMinimum([1, 2, 1])).toEqual([2, 1]);
  });
});
