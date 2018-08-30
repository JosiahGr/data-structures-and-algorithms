function cap(string) {
  const arr1 = [];
  const arr2 = [];
  const stringArr = string.split('');
  for (let i = 0; i < stringArr.length; i++) {
    if (i % 2 === 0) {
      arr1.push(stringArr[i].toUpperCase());
      arr2.push(stringArr[i]);
    } else {
      arr1.push(stringArr[i]);
      arr2.push(stringArr[i].toUpperCase());
    }
  }
  return [arr1.join(''), arr2.join('')];
}

export default cap;
