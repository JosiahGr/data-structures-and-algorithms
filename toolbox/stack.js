'use strict';

export default class Stack {
  constructor() {
    this.storage = [];
  }
  
  push(value) {
    this.storage.push(value);
  }
  pop() {
    return this.storage.pop();
  }
  isEmpty() {
    if (this.storage.length < 1) {
      return true;
    }
    return false;
  }
}
