'use strict';

// Big O - Time O(n) Space O(1)
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

      for (let i = 0; i < parent.children.length; i++) {
        if (parent.children.value === target) {
          q2.push(parent.value);
        }
        return queue.enqueue(parent.children[i]);
      }
    }
    return q2;
  }
}

export default KaryTree;
