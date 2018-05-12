'use strict';

module.exports = (arr) => {
  let highestProduct = 0;

  for (let k = 0; k < arr.length; k++) {
    for (let j = 0; j < arr[k].length; j++) {
      const current = arr[k][j];
      let down;
      let right;

      if (arr[k + 1]) right = arr[k + 1][j];
      if (arr[k][j + 1]) down = arr[k][j + 1];

      if (down * current > highestProduct) {
        highestProduct = down * current;
      }
      if (right * current > highestProduct) {
        highestProduct = right * current;
      }
    }
  }
  return highestProduct;
};

largestProductArray();
