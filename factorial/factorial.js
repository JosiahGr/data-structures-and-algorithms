'use strict';

export default function FirstFactorial(num) { 
  let counter = num; // 4
  let result = num; // 4
  
  while (counter > 1) {
    counter -= 1;
    result *= counter;
  }

  return result;       
}
