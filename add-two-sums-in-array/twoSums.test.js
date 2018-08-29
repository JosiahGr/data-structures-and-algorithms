'use strict';

import addSums from './twoSums';

describe('#addSums', () => {
  test('Should return [0, 2]', () => {
    expect(addSums([1, 2, 3], 4)).toEqual([0, 2]);
  });
  test('Should return [1, 3]', () => {
    expect(addSums([1, 2, 3, 4], 6)).toEqual([1, 3]);
  });
  test('Should return [3, 4]', () => {
    expect(addSums([1, 2, 3, 4, 5], 9)).toEqual([3, 4]);
  });
});
