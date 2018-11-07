'use strict';

export default function verifyTri(num1, num2, num3) {
  if (num1 - num2 === num3 || num2 - num1 === num3 || num1 - num3 === num2 || num3 - num1 === num2 || num3 - num2 === num1 || num2 - num3 === num1) { // eslint-disable-line
    return true;
  }
  return false;
}

