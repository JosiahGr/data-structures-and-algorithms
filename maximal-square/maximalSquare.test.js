'use strict';

import maximalSquare from './maximalSquare';

describe('#maximalSquare', () => {
  test('#maximalSquare should take in a 2D matrix and determines the location of a sub matrix', () => {
    expect(maximalSquare([[1, 0, 1, 0, 0], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 0, 0, 1, 0]])).toEqual(4); // eslint-disable-line
  });
});
