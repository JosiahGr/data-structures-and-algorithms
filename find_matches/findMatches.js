'use strict';

// Big O - Time O(n) Space O(n) === n = w
import Queue from './queue';

class KaryTree {
  constructor(root = null) {
    this.root = root;
  }

  findMatches(target) {
    const queue = new Queue();
    const q2 = new Queue();

    if (!this.root) return null;

    queue.enqueue(this.root);
    
    while (!queue.isEmpty()) {
      const parent = queue.dequeue();

      parent.children.forEach((children) => {
        if (children.value === target) {
          q2.enqueue(children.value);
        }
        return queue.enqueue(children);
      });
    }
    return q2.storage;
  }
}

export default KaryTree;
