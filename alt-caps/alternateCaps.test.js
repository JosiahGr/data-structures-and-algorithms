'use strict';

import caps from './alternateCaps';

describe('#caps', () => {
  test('Should return two strings with the first alternating caps', () => {
    expect(caps('wonderful booleans')).toEqual(['WoNdErFuL BoOlEaNs', 'wOnDeRfUl bOoLeAnS']);
    expect(caps('incredible integers')).toEqual(['InCrEdIbLe iNtEgErS', 'iNcReDiBlE InTeGeRs']);
  });
});
