'use strict';

const commonAncestor = (arr) => {
  const map = {};
  const array = arr;
  let maxEl = array[0]; 
  let maxCount = 1;

  for (let i = 0; i < array.length; i++) {
    const el = array[i];

    if (map[el] === undefined) {
      map[el] = 1;
    } else {
      map[el] += 1;
    }
    if (map[el] > maxCount) {
      maxEl = el;
      maxCount += 1;
    }
  }

  return maxEl;
};

export default commonAncestor;
