'use strict';

import Node from './node';

const findMid = (value) => {
  const node = new Node(value);

  if (!node.head) {
    return undefined;
  }
  
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

  return mid;
};

export default findMid;
