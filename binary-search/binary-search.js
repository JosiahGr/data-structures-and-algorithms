'use strict';

const binary = module.exports = {};

binary.findKey = (array, key) => {
  const key1 = key;
  const len = array.length;
  let counter = -1; 

  for (let i = 0; i < len; i++) {
    if (key1 === array[i]) {
      counter += i + 1;
      break;
    }
  }
  return counter;
};
