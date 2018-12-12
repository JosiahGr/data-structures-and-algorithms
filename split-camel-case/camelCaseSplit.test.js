'use strict';

import camelCaseSplit from './camelCaseSplit';

describe('#camelCaseSplit', () => {
  test('should split camel case word into two', () => {
    expect(camelCaseSplit('camelCase')).toEqual('camel Case');
  });
});
