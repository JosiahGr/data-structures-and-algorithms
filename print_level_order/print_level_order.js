'use strict';

// Big O - Time O(n) Space O(1)
import Queue from './queue';

class KaryTree {
  constructor(root = null) {
    this.root = root;
  }

  printLevelOrder() {
    const queue = new Queue();
    if (!this.root) return null;
    console.log(this.root);

    queue.enqueue(this.root);
  
    let stringedLevels = '';
    this.root.level = 1;

    while (!queue.isEmpty()) {
      console.log(queue);
      const parent = queue.dequeue();
      console.log(parent.children);

      for (let i = 0; i < parent.children.length; i++) {
        parent.children[i].level = parent.level + 1;
        return queue.enqueue(parent.children[i]);
      }
      if (!queue.isEmpty() && parent.level === queue.peek().level) {
        stringedLevels += parent.value;
      } else {
        stringedLevels += `${parent.value}/n`;
      }
    }
    return stringedLevels;
  }
}

export default KaryTree;
