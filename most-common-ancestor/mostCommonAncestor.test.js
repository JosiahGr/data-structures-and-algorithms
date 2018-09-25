'use strict';

import commonAncestor from './mostCommonAncestor';

describe('#commonAncestor', () => {
  test('Should return most common element in an array', () => {
    expect(commonAncestor([1, 2, 3, 4, 4, 3, 3])).toEqual(3);
  });
});
