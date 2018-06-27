'use strict';

import findParens from './closing';

describe('closing.js', () => {
  test('#find to do the right thing', () => {
    expect(findParens('1234 ( a lot () )...', 5)).toEqual(16);
  });
});
