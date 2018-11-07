'use strict';

export default function mergeArray(arr1, arr2) {
  let length;

  const newArr = [];
  
  if (arr1.length >= arr2.length) {
    length = arr1.length; //eslint-disable-line
  } else {
    length = arr2.length; // eslint-disable-line
  }

  for (let i = 0; i < length; i++) {
    newArr.push(arr1[i]);
    newArr.push(arr2[i]);
  }

  return newArr;
}
