'use strict';

const LinkedList = require('../ll_insertions');

describe('main.js', () => {
  test('#append Should return a node at the very end', () => {
    const testList = new LinkedList();
    testList.append(5);
    expect(testList.head.value).toEqual(5);

    testList.append(6);
    expect(testList.head.next.value).toEqual(6);

    testList.append(7);
    expect(testList.head.next.next.value).toEqual(7);

    testList.append(4);
    expect(testList.head.next.next.next.value).toEqual(4);
  });
  test('#insertBefore should find the value input and place the newValue before it', () => {
    const testList = new LinkedList();
    testList.append(1);
    testList.append(2);
    testList.append(3);
    testList.append(4);
    testList.insertBefore(4, 2);
    expect(testList.head.next.next.next.value).toEqual(2);
  });
  test('#insertAfter should find the value input and place the newValue after it', () => {
    const testList = new LinkedList();
    testList.append(1);
    testList.append(2);
    testList.append(3);
    testList.append(4);
    testList.insertAfter(2, 6);
    expect(testList.head.next.next.value).toEqual(6);
  });
});
