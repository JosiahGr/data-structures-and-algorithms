import validator from './validate-cc';

describe('Validates whether a series of integers equal to 16 integers', () => {
  test('should return false for not enough numbers', () => {
    expect(validator(1, 2, 3, 4)).toBeFalsy();
  });
  test('should return truthy for having the right amount of digits', () => {
    expect(validator(1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9)).toEqual(false);
  });
  test('should return  for falsy when given a letter or symbol', () => {
    expect(validator(1, '!', 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 'f')).toEqual(false);
  });
});
