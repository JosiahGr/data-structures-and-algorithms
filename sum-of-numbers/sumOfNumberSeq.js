'use strict';

const sumOfNumSeq = (lastNumber) => {
  if (lastNumber < 0) {
    return `${lastNumber} is an invalid amount`;
  }
  if (lastNumber === 0) {
    return '0';
  }
  let result = '';
  let total = 0;
  for (let x = 0; x < lastNumber; x++) {
    total += x;
    result += `${x}+`;
  }
  total += lastNumber;
  return `${result}${lastNumber} = ${total}`;
};

export default sumOfNumSeq;
