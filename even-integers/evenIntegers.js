'use strict';

const evenIntegers = (n) => {
  const string = n.toString();
  for (let i = 0; i < string.length; i++) {
    if (Number(string[i]) % 2 !== 0) {
      return false;
    }
  }   
  return true;
};

export default evenIntegers;
