'use strict';

import nonRepeatingChar from './nonRepeatingChar';

describe('#nonRepeatingChar', () => {
  test('Should return the first character that is not repeating', () => {
    expect(nonRepeatingChar('laskjdflaksjfsdlkfjt')).toEqual('t');
    expect(nonRepeatingChar('laskjdflak3sjfsdlkfjt')).toEqual('3');
    expect(nonRepeatingChar('savvy')).toEqual('s');
  });
});
