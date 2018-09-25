'use strict';

const commonAncestor = (arr) => {
  const Map = {};
  const array = arr;
  let maxEl = array[0]; 
  let maxCount = 1;

  for (let i = 0; i < array.length; i++) {
    const el = array[i];

    if (!Map[el]) {
      Map[el] = 1;
    } else {
      Map[el] += 1;
    }
    if (Map[el] > maxCount) {
      maxEl = Map[el];
      maxCount += 1;
    }
  }

  return maxEl;
};

export default commonAncestor;
