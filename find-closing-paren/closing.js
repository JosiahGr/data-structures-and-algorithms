'use strict';

function findParens(string, num) {
  let counter = num;
  let closingP = null;

  for (let i = num; i < string.length; i++) {
    counter += 1;
    if (string[i] === ')') {
      closingP = counter - 1; 
    }
  }
  return closingP;
}

export default findParens;
