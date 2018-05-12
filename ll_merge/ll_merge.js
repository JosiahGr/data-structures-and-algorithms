'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  merge(a, b) {
    const nodeA = new Node(a);
    const nodeB = new Node(b);
    let listA = this.head;

    if (!this.head) {
      this.head = nodeA;
      return this;
    }

    if (!listA.next) {
      listA.next = nodeB;
      listA.next.next = nodeA;
      return this;
    }

    while (listA.next) {
      listA = listA.next;
    }
    
    return undefined;
  }
};
