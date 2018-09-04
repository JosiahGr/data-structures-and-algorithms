'use strict';

function nonRepeatingChar(string) {
  const lowerString = string.toLowerCase();
  const map = {};
  let unique = '';
  for (let i = 0; i < lowerString.length; i++) {
    const currentChar = lowerString[i];
    if (map[currentChar]) {
      map[currentChar] += 1;
    } else {
      map[currentChar] = 1;
    }
  }
  for (let i = 0; i < lowerString.length; i++) {
    const currentValue = map[lowerString[i]];
    if (currentValue === 1) {
      unique = string[i];
      break;
    }
  }
  return unique;
}

export default nonRepeatingChar;
