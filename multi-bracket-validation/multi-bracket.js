// big o - time is 0(n) space is 0(n) --> n = string

function nestedBrackets(string) {
  const str = string.length;
  if (string[0] !== '[' || string[0] !== '(' || string[0] !== '{') {
    return false;
  }
  for (let k = 1; k < str / 2; k++) {
    if (k === '[' || k === '{' || k === '(') {
      if (string[str - k] === ']' || string[str - k] === '}' || string[str - k] === ')') {
        if (string[k] === string[str - k]) { 
          return true;
        }
      }
    }
  }
  return false;
} 

export default nestedBrackets;

