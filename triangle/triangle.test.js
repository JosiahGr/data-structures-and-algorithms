import verifyTri from './triangle';

describe('#verifuyTri', () => {
  test('should return true if triangle can be made', () => {
    expect(verifyTri(1, 2, 3)).toBeTruthy();
  });
  test('should return false if triangle cannot be made', () => {
    expect(verifyTri(1, 1, 3)).toEqual(false);
  });
});
