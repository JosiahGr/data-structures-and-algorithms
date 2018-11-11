'use strict';

export default function verify(string) {
  if (string.length !== 10 || isNaN(string)) { // eslint-disable-line
    return false;
  }

  const phoneNumber = string.split('');

  const format = `(${phoneNumber[0]}${phoneNumber[1]}${phoneNumber[2]}) ${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}-${phoneNumber[6]}${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}`;

  return format;
}
