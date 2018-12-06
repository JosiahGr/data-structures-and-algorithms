'use strict';

export default function isNarcissistic(num) {
  const newNum = num.toString();
  let finalTotal = 0;

  if (newNum.length === 1) {
    return true;
  }

  for (let i = 0; i < newNum.length; i++) {
    let total = newNum[i];
    for (let n = 0; n < newNum.length - 1; n++) {
      total *= newNum[i];
    }
    finalTotal += total;
  }

  if (finalTotal === num) {
    return true;
  }
  return false;
}
