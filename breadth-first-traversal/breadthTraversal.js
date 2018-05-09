'use strict';

// Big O - Time O(n) Space O(1)

import Queue from './queue';

function breadthTraversal(rootNode) {
  const queue = new Queue();
  let levels = '';
  queue.enqueue(rootNode);

  while (!queue.isEmpty()) {
    const parent = queue.storage[queue.storage.length - 1];
    queue.dequeue();
    if (parent.left) queue.enqueue(parent.left);
    if (parent.right) queue.enqueue(parent.right);
    levels += parent.value;
  }
  return levels;
}

export default breadthTraversal;
