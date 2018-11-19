'use strict';

import longestWord from './longestWord';

describe('#longestWord', () => {
  test('#longestWord should return the longest word of a given string that excludes special characters', () =>{
    expect(longestWord('Hello my name is')).toEqual('Hello');
    expect(longestWord('Hello 234my na#^ is')).toEqual('Hello');
    expect(longestWord('Saguaro! national park')).toEqual('national');
  });
});
