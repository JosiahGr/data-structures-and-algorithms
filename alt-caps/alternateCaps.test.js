'use strict';

import altCap from './alternateCaps';

describe('#altCap', () => {
  test('Should return two strings with the first alternating altCap', () => {
    expect(altCap('wonderful booleans')).toEqual(['WoNdErFuL BoOlEaNs', 'wOnDeRfUl bOoLeAnS']);
    expect(altCap('incredible integers')).toEqual(['InCrEdIbLe iNtEgErS', 'iNcReDiBlE InTeGeRs']);
  });
});
