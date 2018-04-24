'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let currentNode = new Node(value);

    if (this.head === null) {
      currentNode = value;
    } while (this.head.next !== null) {
      currentNode = currentNode.head.next.value;
    } 
    currentNode = this.head.value;
    return currentNode;
  }

  insertBefore(value, newValue) {
    let currentNode = new Node(newValue);

    if (this.head === null) {
      currentNode = this.head.newValue;
    } while (this.head.next !== value) {
      currentNode = this.head.newValue;
    } if (this.head.next === value) {
      currentNode = this.head.newValue;
    }
    return currentNode;
  }

  insertAfter(value, newValue) {
    let currentNode = new Node(newValue); 

    if (this.head === null) {
      currentNode = this.head.newValue;
    } while (this.head.next !== value) {
      currentNode = this.head.next.newValue;
    } if (this.head.next === value) {
      currentNode = this.head.newValue;
    }
    return currentNode;
  }

  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node; 
    return this;
  }
};
