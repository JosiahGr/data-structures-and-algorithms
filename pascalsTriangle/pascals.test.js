import pascalsTriangle from './pascals';

describe('#pascalsTriangle', () => {
  test('should return 3 rows of Pascals Triangle', () => {
    expect(pascalsTriangle(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
  });
  test('should return 5 rows of Pascals Triangle', () => {
    expect(pascalsTriangle(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });
  test('should return the first two rows of Pascals Triangle', () => {
    expect(pascalsTriangle(2)).toEqual([[1], [1, 1]]);
  });
});
