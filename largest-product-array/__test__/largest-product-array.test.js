'use strict';

const product = require('../largest-product-array');

describe('largest-product-array.js', () => {
  test('Should return the highest product', () => {
    expect(product([[1, 2], [1, 2], [2, 3]])).toEqual(6);
    expect(product([[1, 2, 3], [1, 2, 5], [1, 2, 3]])).toEqual(15);
    expect(product([[1], [1], [2]])).toEqual(2);
  });
});
