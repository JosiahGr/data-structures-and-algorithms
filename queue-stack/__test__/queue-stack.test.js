import Queue from '../queue';

describe('Using two stacks to imitate a queue', () => {
  test('enque method should insert values into the stack1', () => {
    const queue = new Queue();
    queue.stack1 = [1, 2, 3];
    queue.stack2 = [5, 6, 7];
    queue.enqueue(2);
  });
  test('dequeue method should pop values form stack 2', () => {
    const queue = new Queue();
    queue.stack1 = [1, 2, 3];
    queue.stack2 = [5, 6, 7];
    queue.dequeue();
  });
});
