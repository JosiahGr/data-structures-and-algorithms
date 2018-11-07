'use strict';

export default function mindTheGap(num) {
  if (num.length < 3) {
    return false;
  }
  const value = num.toString();
  const divider = `${value[0]}${value[value.length - 1]}`;
  
  if (value % divider === 0) {
    return true;
  }

  return false;
}
