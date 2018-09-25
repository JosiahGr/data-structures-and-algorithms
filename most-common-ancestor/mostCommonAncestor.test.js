'use strict';

import commonAncestor from './mostCommonAncestor';

describe('#commonAncestor', () => {
  test('Should return most common element in an array', () => {
    expect(commonAncestor([1, 2, 3, 4, 4, 3, 3])).toEqual(3);
    expect(commonAncestor([1, 2, 3, 4, 4])).toEqual(4);
    expect(commonAncestor(['apple', 'orange', 'apple', 'peach', 1])).toEqual('apple');
  });
});
