'use strict';

function removeMinimum(numbers) {
  let smallest = numbers[0];
  const result = [];
  let indexToRemove = null;
  for (let x = 0; x < numbers.length; x++) {
    result.push(numbers[x]);
    if (numbers[x] < smallest) {
      smallest = numbers[x];
      indexToRemove = x;
    }
  }
  result.splice(indexToRemove, 1);
  return result;
}

export default removeMinimum;
