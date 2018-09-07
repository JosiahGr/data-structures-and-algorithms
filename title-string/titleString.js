
'use strict';

const title = (titleUpper, minorWords) => {
  let result = '';
  const lower = titleUpper.toLowerCase();
  const conditions = minorWords.toLowerCase();
  const splitStr = lower.split(' ');
  const splitCond = conditions.split(' ');
  const len = splitStr.length;
  let flag = true;
  result = result.concat(`${splitStr[0].charAt(0).toUpperCase() + splitStr[0].slice(1).toLowerCase()} `);
  for (let x = 1; x < (len - 1); x++) {
    for (let y = 0; y < splitCond.length; y++) {
      if (splitStr[x] === splitCond[y]) {
        result = result.concat(`${splitStr[x]} `);
        flag = false;
      } 
    }
    if (flag === true) {
      const test = splitStr[x].charAt(0).toUpperCase() + splitStr[x].slice(1).toLowerCase();
      result = result.concat(`${test} `);
    }
    flag = true;
  }
  result = result.concat(`${splitStr[len - 1].charAt(0).toUpperCase() + splitStr[len - 1].slice(1).toLowerCase()} `);

  return result;
};

export default title;
