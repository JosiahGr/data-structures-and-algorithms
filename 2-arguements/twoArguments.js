'use strict';

export default function sum(x) {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1]; // eslint-disable-line
  }
  return function sum2(y) {
    return x + y;
  };
}
