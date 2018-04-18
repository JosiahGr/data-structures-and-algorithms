'use strict';

const shiftTest = require('../shift-array');

describe('shift-array.js', () => {
  test('Should return even', () => {
    expect(shiftTest([1, 2, 3], 4)).toEqual([1, 2, 4, 3]);
  });
  test('should return odd', () => {
    expect(shiftTest([1, 2, 3, 4], 5)).toEqual([1, 2, 5, 3, 4]);
  });
  test('Should return original array', () => {
    expect(shiftTest([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
