'use strict';

import mergeArray from './mergeArray';

describe('#mergeArray', () => {
  test('should return an array of integers', () => {
    expect(mergeArray([1, 2], [1, 2])).toEqual([1, 1, 2, 2]);
    expect(mergeArray([1, 2, 3, 4], [1, 2, 5, 7])).toEqual([1, 1, 2, 2, 3, 5, 4, 7]);
  });
});
