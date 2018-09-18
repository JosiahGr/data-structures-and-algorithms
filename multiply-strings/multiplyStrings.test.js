'use strict';

import multiplyStr from './multiplyStrings';

describe('#multiplyStr', () => {
  test('Should return product of two numbers', () => {
    expect(multiplyStr('2', '2')).toEqual('4');
    expect(multiplyStr('3', '4')).toEqual('12');
    expect(multiplyStr('1', '1')).toEqual('1');
  });
  test('Should return product of three numbers', () => {
    expect(multiplyStr('2', '2', '2')).toEqual('8');
    expect(multiplyStr('3', '3', '4')).toEqual('36');
    expect(multiplyStr('10', '10', '2')).toEqual('200');
  });
  test('Should return undefined for non integer', () => {
    expect(multiplyStr('a', '2', '2')).toEqual(undefined);
  });
});
