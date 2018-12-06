'use strict';

import isNarcissistic from './isNarcissistic';

describe('#isNarcissistic', () => {
  test('Should return a boolean if the integer is narcissitic', () => {
    expect(isNarcissistic(153)).toEqual(true);
    expect(isNarcissistic(134)).toEqual(false);
  });
});
