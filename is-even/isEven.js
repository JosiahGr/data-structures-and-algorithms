'use strict';

export default function isEven(n) {
  let flag = true;
  const num = n.toString().split('');

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
