'use strict';

const LinkedList = require('../lib/linkedList');

describe('linkedList.js', () => {
  test('#kthFromEnd Should return a node based on the given index based on last node', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);
    testList.insertAtEnd(8);
    expect(testList.head.next.next.next.value).toEqual(8);
    expect(testList.kthFromEnd(1)).toEqual(7);
    expect(testList.kthFromEnd(3)).toEqual(5);
    expect(testList.kthFromEnd(0)).toEqual(8);
  });
});
