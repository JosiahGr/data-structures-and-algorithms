'use strict';

function largestProductArray(arr) {
  const arr1 = arr.length;
  const arr2 = arr[0].length;
  let highestProduct = 0;

  for (let k = 0; k < arr1; k++) {
    for (let j = 0; j < arr2; j++) {
      const big = arr[k][j] * arr[k][j + 1];
      
      if (highestProduct < big) {
        highestProduct = big;
      }
    }
  }
  return highestProduct;
}

largestProductArray();
