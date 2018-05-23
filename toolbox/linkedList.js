'use strict';

export default class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
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

  insertBefore(value, newValue) {
    const node = new Node(newValue);
    let backOne = this.head;
    let currentOne = backOne.next;
    
    while (currentOne) {
      if (currentOne.value === value) {
        backOne.next = node;
        node.next = currentOne;
        return this;
      }
      backOne = currentOne;
      currentOne = currentOne.next;
    }
    return null;
  }

  insertAfter(value, newValue) {
    const node = new Node(newValue);
    let currentOne = this.head;

    if (!this.head) {
      this.head = node;
      return this;
    }
    
    while (currentOne) {
      if (currentOne.value === value) {
        const placeholder = currentOne.next;
        currentOne.next = node;
        currentOne.next.next = placeholder;
        break;
      }
      currentOne = currentOne.next;
    }
    return this;
  }
}
