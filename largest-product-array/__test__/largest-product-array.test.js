'use strict';

import largestProductArray from '../largest-product-array';

describe('largest-product-array.js', () => {
  test('Should return the largest product', () => {
    expect(largestProductArray([[1, 2], [1, 2], [2, 3]])).toEqual(6);
    expect(largestProductArray([[1, 2, 3], [1, 2, 5], [1, 2, 3]])).toEqual(15);
    expect(largestProductArray([[1], [1], [2]])).toEqual(2);
  });
});
