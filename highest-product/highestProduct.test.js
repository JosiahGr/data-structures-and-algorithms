'use strict';

import product from './highestProduct';

describe('#product', () => {
  test('Should return max product value of three integers', () => {
    expect(product([1, 2, 3, 4, 5])).toEqual(60);
    expect(product([0, -2, 0, 4, 5])).toEqual(0);
    expect(product([6, -2, 0, 4, 5])).toEqual(120);
  });
});
