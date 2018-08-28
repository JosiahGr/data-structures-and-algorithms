'use strict';

import quicksort from './quicksortAlgo';

describe('#quicksort', () => {
  test('Sort all integers', () => {
    expect(quicksort([1, 2, 3, 5, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(quicksort([3, 9, 7, 5, 4])).toEqual([3, 4, 5, 7, 9]);
    expect(quicksort([3, 4, 5, 7, 9])).toEqual([3, 4, 5, 7, 9]);
  });
});
