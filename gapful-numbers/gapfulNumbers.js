'use strict';

export default function mindTheGap(num) {
  const value = num.toString();
  const divider = `${value[0]}${value[value.length - 1]}`;

  if (value.length <= 2) {
    return false;
  } else if (value % divider === 0) {
    return true;
  }

  return false;
}
