'use strict';

const LinkedList = require('../ll_merge');

describe('linkedList.js', () => {
  test('#merge Should return nodes based on two different lists of nodes', () => {
    const testList = new LinkedList();
    testList.merge(1, 2);
    testList.merge(3, 4);
    testList.merge(5, 6);
    expect(testList.head.next.next.next.value).toEqual(1);
    expect(testList.head.next.next.next.value).toEqual(2);
    expect(testList.head.next.next.next.value).toEqual(3);
    expect(testList.head.next.next.next.value).toEqual(4);
    expect(testList.head.next.next.next.value).toEqual(5);
    expect(testList.head.next.next.next.value).toEqual(6);
  });
});
