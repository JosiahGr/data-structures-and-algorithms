import pascalsTriangle from './pascals';

describe('#pascalsTriangle should return each matched values as a new queue', () => {
  test('should return with 1, 1, 1, 1, 1, 1', () => {
    expect(pascalsTriangle(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
  });
});
