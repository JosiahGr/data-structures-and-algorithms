'use strict';

function addSums(numbers, target) {
  for (let x = 0; x < numbers.length; x++) {
    for (let y = x + 1; y < numbers.length; y++) {
      if (numbers[x] + numbers[y] === target) {
        return [x, y];
      }
    }
  }
}

export default addSums;
