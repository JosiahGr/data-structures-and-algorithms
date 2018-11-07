'use strict'; 

import mindTheGap from './gapfulNumbers';

describe('#mindTheGap', () => {
  test('should return true for gapful input', () => {
    expect(mindTheGap(192)).toBeTruthy();
    expect(mindTheGap(583)).toBeTruthy();
  });
  test('should return false for non gapful input', () => {
    expect(mindTheGap(210)).toEqual(false);
    expect(mindTheGap(211)).toEqual(false);
  });
  test('should return false for being too small a number', () => {
    expect(mindTheGap(21)).toEqual(false);
    expect(mindTheGap(20)).toEqual(false);
  });
});
