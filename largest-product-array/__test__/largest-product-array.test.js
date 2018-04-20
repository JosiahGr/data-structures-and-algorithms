'use strict';

const highestProduct = require('../largest-product-array');

describe('a', () => {
  test('Should return even', () => {
    expect(highestProduct([[1, 2], [2, 3], [3, 4]])).toEqual(12);
  });
  test('b', () => {
    expect(highestProduct([[6, 4], [12, 3], [8, 4]])).toEqual(96);
  });
  test('c', () => {
    expect(highestProduct([[1, 2, 3], [2, 3, 4], [3, 4, 5]])).toEqual(20);
  });
});
