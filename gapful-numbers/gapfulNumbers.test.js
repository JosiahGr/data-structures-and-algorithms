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
});
