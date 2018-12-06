'use strict';

export default function isNarcissistic(num) {
  const newNum = num.toString();
  let finalTotal = 0;

  for (let i = 0; i < newNum.length; i++) {
    let total = newNum[i];
    for (let n = 0; n < newNum.length - 1; n++) {
      total *= newNum[i];
    }
    finalTotal += total;
  }

  if (Number(finalTotal) === num) {
    return true;
  }
  return false;
}
