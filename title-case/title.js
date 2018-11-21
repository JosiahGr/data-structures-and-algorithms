'use strict';

export default function letterCapitalize(str) { 
  const wordArr = str.split(' ');
  
  for (let i = 0, n = wordArr.length; i < n; i++) {
    wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].slice(1); 
  }
  
  const newStr = wordArr.join(' ');
  
  return newStr; 
}
