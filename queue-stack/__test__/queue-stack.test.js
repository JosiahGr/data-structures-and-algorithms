import Queue from '../queue';

const queue = new Queue();

describe('Using two stacks to imitate a queue', () => {
  test('enque method should insert values into stack1', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.stack1).toEqual([1, 2, 3]);
  });
  test('dequeue method should pop values from stack 2', () => {
    queue.dequeue();
    expect(queue.stack1).toEqual([2, 3]);
  });
});
