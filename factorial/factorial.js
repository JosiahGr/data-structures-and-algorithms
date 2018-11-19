'use strict';

export default function FirstFactorial(num) { 
  let counter = num;
  let result = num;
  
  while (counter > 1) {
    counter -= 1;
    result *= counter;
  }

  return result;       
}
