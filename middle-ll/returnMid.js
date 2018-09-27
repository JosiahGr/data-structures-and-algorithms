'use strict';

const findMid = (node) => {
  // if (!node.head) {
  //   return undefined;
  // }

  let mid = node.head;
  let current = node.head;
  let counter = 0;

  while (current.next !== null) {
    current = current.next;
    counter += 1;
    if (counter % 2 === 0) {
      mid = mid.next;
    }
  }
  mid = mid.next;

  return mid.value;
};

export default findMid;
