'use strict';

function matrix(mat, y, x) {
  if (y + 1 >= mat.length || mat[y + 1][x] === '0') {
    return 1;
  }
  if (x + 1 >= mat[y].length || mat[y][x + 1] === '0') {
    return 1;
  }
  if (mat[y + 1][x + 1] === '0') {
    return 1;
  }
  return 1 + Math.min(matrix(mat, y + 1, x), matrix(mat, y, x + 1), matrix(mat, y + 1, x + 1));
}

export default function MaximalSquare(strArr) {
  let max = 0;
  const arrayArray = strArr.map(str => str.split(''));
  for (let y = 0; y < arrayArray.length; y++) {
    for (let x = 0; x < arrayArray[y].length; x++) {
      if (arrayArray[y][x] !== '0' && max === 0) {
        max = 1;
      }
      if (arrayArray[y][x] !== '0' && matrix(arrayArray, y, x) > max) {
        max = matrix(arrayArray, y, x);
      }
    }
  }
  return max * max;
}
