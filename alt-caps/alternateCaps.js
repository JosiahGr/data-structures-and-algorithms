'use strict';

export default function altCap(string) {
  const arr1 = [];
  const arr2 = [];
  const string1 = string;
  const arr = string1.split('');
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr1.push(arr[i].toUpperCase());
      arr2.push(arr[i]);
    } else {
      arr1.push(arr[i]);
      arr2.push(arr[i].toUpperCase());
    }
  }
  return [arr1.join(''), arr2.join('')];
}
