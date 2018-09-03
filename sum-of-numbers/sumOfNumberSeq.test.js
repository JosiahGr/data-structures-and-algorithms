'use strict';

import sumOfNumSeq from './sumOfNumberSeq';

describe('#sumOfNumSeq', () => {
  test('Should return the correct equation given a specific integer', () => {
    expect(sumOfNumSeq(2)).toEqual('0+1+2 = 3');
    expect(sumOfNumSeq(3)).toEqual('0+1+2+3 = 6');
    expect(sumOfNumSeq(4)).toEqual('0+1+2+3+4 = 10');
  });
  test('Should return zero', () => {
    expect(sumOfNumSeq(0)).toEqual('0');
  });
  test('Should return error for negative number', () => {
    expect(sumOfNumSeq(-2)).toEqual('-2 is an invalid amount');
  });
});
