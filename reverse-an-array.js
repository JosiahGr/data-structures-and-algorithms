function reverseArr(num) {
  var newArray = [];
  for(let i = num.length - 1; i >= 0; i--) {
    newArray.push(num[i]);
  }
  return newArray;
}

reverseArr([1, 2, 3, 4, 5, 6]);