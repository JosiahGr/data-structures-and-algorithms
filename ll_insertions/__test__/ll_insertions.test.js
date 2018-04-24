'use strict';

const LinkedList = require('../ll_insertions');

describe('main.js', () => {
  test('#append Should return a node at the very end', () => {
    const testList = new LinkedList();
    testList.append(5);
    testList.append(6);
    testList.append(7);
    testList.append(4);
    expect(testList.head.next.next.value).toEqual(4);
  });
  // test('#insertBefore should find the value input and place the newValue before it', () => {
  //   const testList = new LinkedList();
  //   expect(testList.insertBefore([1, 2, 3, 4], 5, 2)).toEqual([1, 5, 2, 3, 4]);
  // });
  // test('#insertAfter should find the value input and place the newValue after it', () => {
  //   const testList = new LinkedList();
  //   expect(testList.insertAfter([1, 2, 3, 4, 5], 6, 4)).toEqual([1, 2, 3, 4, 6, 5]);
  // });
});
