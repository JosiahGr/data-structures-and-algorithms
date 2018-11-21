'use strict';

import simpleAdding from './addition';

describe('#simpleAdding', () => {
  test('#simpleAdding should return the sum of all numbers in one integer', () => {
    expect(simpleAdding(4)).toEqual(10);
  });
});
