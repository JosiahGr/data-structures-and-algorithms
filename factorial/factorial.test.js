'use strict';

import factorial from './factorial';

describe('#factorial', () => {
  test('#factorial should return the factorial of a given integer and return the sum', () => {
    expect(factorial(4)).toEqual(24);
  });
});
