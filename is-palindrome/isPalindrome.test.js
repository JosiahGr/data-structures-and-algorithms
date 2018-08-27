'use strict';

import checkPalindrome from './isPalindrome';

describe('isPalindrome.js', () => {
  test('#Check if word is a palindrome', () => {
    expect(checkPalindrome('hannah')).toEqual(true);
  });
  test('Return false if not a palindrome', () => {
    expect(checkPalindrome('hanna')).toEqual(false);
  });
  test('check for integers to be palindrome', () => {
    expect(checkPalindrome('1hannah1')).toEqual(true);
  });
});
