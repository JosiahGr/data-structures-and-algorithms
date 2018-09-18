'use strict';

export default function multiplyStr(a, b, c) {
  const numA = parseInt(a, 10);
  const numB = parseInt(b, 10);
  const numC = parseInt(c, 10);

  const product = numA * numB * numC;

  return `${product}`;
}
