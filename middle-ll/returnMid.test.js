'use strict';

import findMid from './returnMid';
import LinkedList from './linkedList';

describe('#findMid', () => {
  test('Should return the middle node in a linked list', () => {
    const testList = new LinkedList();
    testList.append(5);
    expect(testList.head.value).toEqual(5);

    testList.append(6);
    expect(testList.head.next.value).toEqual(6);

    testList.append(7);
    expect(testList.head.next.next.value).toEqual(7);

    testList.append(4);
    expect(testList.head.next.next.next.value).toEqual(4);
    expect(findMid(testList)).toEqual(7);
  });
});
