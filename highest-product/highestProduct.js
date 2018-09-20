'use strict';

export default function product(arr) {
  let low = Number.NEGATIVE_INFINITY;
  let mid = Number.NEGATIVE_INFINITY;
  let high = Number.NEGATIVE_INFINITY;
  let placeholder1 = 0;
  let placeholder2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > high) {
      high = arr[i];
      placeholder1 = i;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid && i !== placeholder1) {
      mid = arr[i];
      placeholder2 = i;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > low && i !== placeholder1 && i !== placeholder2) {
      low = arr[i];
    }
  }

  return (low * mid * high);
}
