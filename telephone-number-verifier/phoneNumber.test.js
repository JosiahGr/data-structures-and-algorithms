'use strict';

import verify from './phoneNumber';

describe('#verify', () => {
  test('should convert integers into a proper phone number format', () => {
    expect(verify('3035027343')).toEqual('(303) 502-7343');
  });
  test('should return false for having either too many integers or not enough', () => {
    expect(verify('303502734')).toEqual(false);
    expect(verify('30350273433')).toEqual(false);
  });
  test('should return false for using wrong symbols', () => {
    expect(verify('30350273d4')).toEqual(false);
  });
});
