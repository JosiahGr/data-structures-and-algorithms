'use strict';

import letterCapitalize from './title';

describe('#letterCapitalize', () => {
  test('#letterCapitalize should take in a string and convert it to title case capitalization', () => {
    expect(letterCapitalize('Hello world')).toEqual('Hello World');
    expect(letterCapitalize('One more day until thanksgiving')).toEqual('One More Day Until Thanksgiving');
  });
});
