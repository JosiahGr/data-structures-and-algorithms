'use strict';

import maximalSquare from './maximalSquare';

describe('#maximalSquare', () => {
  test('#maximalSquare should take in a 2D matrix and determines the location of a sub matrix', () => {
    expect(maximalSquare(['10100', '10111', '11111', '10010'])).toEqual(4); // eslint-disable-line
  });
});
