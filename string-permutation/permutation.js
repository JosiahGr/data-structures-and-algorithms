
'use strict';

const permutation = (string1, string2) => {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    throw new Error('Invalid input(s). Expected both inputs to be strings.');
  }
  if (string1.length !== string2.length) {
    return false;
  }

  const array1 = string1.split('');
  array1.sort();

  const array2 = string2.split('');
  array2.sort();

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

export default permutation;
