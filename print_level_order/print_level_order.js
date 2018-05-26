'use strict';

// Big O - Time O(n) Space O(n) - n === w
import Queue from './queue';

class KaryTree {
  constructor(root = null) {
    this.root = root;
  }

  printLevelOrder() {
    const queue = new Queue();
    if (!this.root) return null;

    queue.enqueue(this.root);
  
    let stringedLevels = '';
    this.root.level = 1;

    while (!queue.isEmpty()) {
      const parent = queue.dequeue();

      parent.children.forEach((children) => {
        children.level = parent.level + 1;
        return queue.enqueue(children);
      });
      if (!queue.isEmpty() && parent.level === queue.peek().level) {
        stringedLevels += parent.value;
      } else {
        stringedLevels += `${parent.value} `;
      }
    }
    return stringedLevels;
  }
}

export default KaryTree;
