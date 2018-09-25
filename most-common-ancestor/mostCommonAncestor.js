'use strict';

const commonAncestor = (array) => {
  const Map = {};
  let maxEl = array[0]; 
  let maxCount = 1;

  for (let i = 0; i < array.length; i++) {
    const el = array[i];

    if (Map[el] === null) {
      Map[el] = 1;
    } else {
      Map[el] += 1;
    }
    if (Map[el] > maxCount) {
      maxEl = el;
      maxCount += 1;
    }
  }
};

export default commonAncestor;
