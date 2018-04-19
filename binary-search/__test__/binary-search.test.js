'use strict';

const binaryTest = require('../binary-search');

describe('binary-search.js', () => {
  test('Should return index number of key', () => {
    expect(binaryTest.findKey([1, 2, 3, 4], 3)).toEqual(2);
  });
  test('Should return negative', () => {
    expect(binaryTest.findKey([1, 2, 3, 4], 7)).toEqual(-1);
  });
  test('Should return 3', () => {
    expect(binaryTest.findKey([1, -1, 3, -5, 5, 6], -5)).toEqual(3);
  });
});
