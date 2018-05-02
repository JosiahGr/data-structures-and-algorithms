class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
    return this;
  }

  dequeue() {
    if (this.stack2.head) {
      return this.stack2.pop();
    }
    while (this.stack1.head) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
}

export default Queue;
