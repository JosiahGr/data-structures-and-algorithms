'use strict';

import sum from './twoArguments';

describe('#sum', () => {
  test('should return the sum regardless of arguments', () => {
    expect(sum(2, 3)).toEqual(5);
    expect(sum(2)(3)).toEqual(5);
  });
});
