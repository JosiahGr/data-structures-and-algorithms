'use strict';

const evenIntegers = (str) => {
  const string = str.toString();

  for (let i = 0; i < string.length; i++) {
    if (string[i] % 2 !== 0) {
      return false;
    }
  }   
  return true;
};

export default evenIntegers;
