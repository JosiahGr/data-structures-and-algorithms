'use strict';

function merge(a, b) {
  let nodeA = a.head;
  let nodeB = b.head;

  let counter = 0;

  while (nodeB) {
    const nextNodeA = nodeA.next;
    const nextNodeB = nodeB.next;

    if (counter % 2 === 1) {
      nodeA.next = nextNodeA;
    } else if (counter % 2 === 0) {
      nodeB.next = nextNodeB;
    } 
    counter += 1;
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
  return a;
}

export default merge;
