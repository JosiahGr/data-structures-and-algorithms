'use strict';

function twoSum(numbers, target) {
  for (let x = 0; x < numbers.length; x++) {
    for (let y = x + 1; y < numbers.length; y++) {
      if (numbers[x] + numbers[y] === target) {
        return [x, y];
      }
    }
  }
  return undefined;
}

export default twoSum;
