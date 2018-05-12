import Queue from '../queue';

describe('Using two stacks to imitate a queue', () => {
  test('enque method should insert values into stack1', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.stack1).toEqual([1, 2, 3]);
  });
  test('dequeue method should pop values from stack 2', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.stack2).toEqual([2, 3]);
  });
});
