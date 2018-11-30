'use strict';

import mealTotal from './mealTotal';

describe('#mealTotal', () => {
  test('should return the total amount to pay when given the price and desired tip percentage.', () => {
    expect(mealTotal(10, 0.10, 0.10)).toEqual(12);
  });
});
