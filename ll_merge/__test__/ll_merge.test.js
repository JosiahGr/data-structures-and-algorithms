'use strict';

import LinkedList from '../linkedList';
import merge from '../ll_merge';

describe('linkedList.js', () => {
  test('#merge Should return nodes based on two different lists of nodes', () => {
    const testList1 = new LinkedList();
    const testList2 = new LinkedList();

    testList1.append(1);
    testList1.append(2);
    testList2.append(1);
    testList2.append(2);
    expect(merge(testList1, testList2).head.value).toEqual(1);
    expect(merge(testList1, testList2).head.next.value).toEqual(2);
    expect(merge(testList1, testList2).head.next.next.value).toEqual(1);
    expect(merge(testList1, testList2).head.next.next.next.value).toEqual(2);
  });
});
