'use strict';

import canYouMakeIt from './canYouMakeIt';

describe('#canYouMakeIt', () => {
  test('should return true or false if you can make it to the closest gas station', () => {
    expect(canYouMakeIt(5)).toEqual(true);
  });
});
