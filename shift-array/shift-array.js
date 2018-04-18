'use strict';

module.exports = (arr, val) => {
  const split = Math.round(arr.length / 2);
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === split && val !== undefined) {
      newArray.push(val);
    }
    newArray.push(arr[i]);
  }
  return newArray;
};
