'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtEnd(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  kthFromEnd(k) {
    let counter = 0;
    let currentNode = this.head;
    let nodeValue = this.head;

    while (currentNode.next !== null) {
      counter += 1;
      currentNode = currentNode.next;
    }
    counter -= k;
    for (let index = 0; index <= counter - 1; index++) {
      nodeValue = nodeValue.next;
    }
    return nodeValue.value;
  }
};
