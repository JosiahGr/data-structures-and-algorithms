'use strict';

export default function LongestWord(sen) {

  const newSen = sen.trim().replace(/[^a-zA-Z0-9 ]/g, '');
  const newString = newSen.split(' ');
  let longestWord = newString[0];
  for (let i = 0; i < newString.length; i++) {
    if (longestWord.length < newString[i].length) {
      longestWord = newString[i];
    }
  }

  return longestWord; 
}
