import permutation from './permutation';

describe('permutation', () => {
  test('should return true if all characters match', () => { 
    expect(permutation('abcd', 'dcab')).toEqual(true);
  });
  test('should return false when characters do not match', () => { 
    expect(permutation('efgd', 'dcab')).toEqual(false);
  });
  test('should return false when characters and symbols do not match', () => { 
    expect(permutation('!dsf', 'dcab')).toEqual(false);
  });
});
