'use strict';

import Node from './node';

function _add(value) { // eslint-disable-line
  const length = value.length; // eslint-disable-line
  console.log(length);
  let counter = 0;
  value.split('');
  const node = new Node(value[counter]);

  let currentNode = node;
  while (counter < length && currentNode.next) {
    currentNode = currentNode.next;
    counter += 1;
    currentNode.next = node;
  }
  return currentNode.next;
}

export default function add(ll1, ll2) {
  let nodeA = ll1.head;
  let nodeB = ll2.head;
  let num1 = `${ll1.head.value}`;
  let num2 = `${ll2.head.value}`;

  if (nodeA.head === null || nodeB.head === null) {
    return undefined;
  }

  while (nodeA.next !== null) {
    nodeA = nodeA.next;
    nodeB = nodeB.next;

    num1 += `${nodeA.value}`;
    num2 += `${nodeB.value}`;
  }

  num1 = parseInt(num1, 10);
  num2 = parseInt(num2, 10);

  let result = num1 + num2;
  result = `${result}`;

  return _add(result);
}
