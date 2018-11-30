'use strict';

import mealTotal from './mealTotal';

describe('#mealTotal', () => {
  test('should return the total amount to pay when given the price and desired tip percentage.', () => {
    expect(mealTotal(10, '10%', '10%')).toEqual('12.00');
    expect(mealTotal(10, '18%', '7%')).toEqual('10.88');
    expect(mealTotal(10, '15%', '9%')).toEqual('11.05');
  });
});
