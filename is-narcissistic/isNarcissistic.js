'use strict';

export default function isNarcissistic(num) {
  const powerTo = num.length;
  let counter = 0;
  let counter2 = 0;
  let total = 0;
  let finalTotal = 0;

  while (counter2 < powerTo - 1) {
    total += num[counter] * num[counter];
    counter2 += 1;
  }

  while (counter < powerTo) {
    finalTotal += total;
    counter2 = 0;
    counter += 1;
  }

  if (total === num) {
    return true;
  }
  return false;
}
