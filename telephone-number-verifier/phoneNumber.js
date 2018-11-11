'use strict';

export default function verify(string) {
  const phoneNumber = string.split('');

  if (phoneNumber.length !== 10) {
    return false;
  }
  
  const format = `(${phoneNumber[0]}${phoneNumber[1]}${phoneNumber[2]}) ${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}-${phoneNumber[6]}${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}`;

  return format;
}
