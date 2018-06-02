'uses strict';

import leftJoin from './leftJoin';

const mapLeft = { 
  fond: 'enamored', 
  wrath: 'anger', 
  outfit: 'garb', 
  guide: 'usher', 
};

const mapRight = { 
  fond: 'averse', 
  wrath: 'delight',
  diligent: 'idle',
  guide: 'follow',
  flow: 'jam',
};

const results = leftJoin(mapLeft, mapRight);

describe('#leftJoin', () => {
  test('should return keys and values from mapLeft and matched values from mapRight', () => {
    expect(results.fond).toEqual(['enamored', 'averse']);
    expect(results.wrath).toEqual(['anger', 'delight']);
    expect(results.outfit).toEqual(['garb', null]);
    expect(results.guide).toEqual(['usher', 'follow']);
  });
  test('no value in left map, expect null', () => {
    expect(leftJoin()).toBeNull();
  });
  test('no right map, expect all keys & values of left map to remain the same', () => {
    expect(leftJoin(mapLeft)).toEqual(mapLeft);
  });
});
