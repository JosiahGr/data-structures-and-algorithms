'use strict';

import LinkedList from './linkedList';
import add from './addTwoNums';

describe('linkedList.js', () => {
  test('#add Should return nodes based on the sums of 2 linked lists and returned as single integer nodes', () => {
    const testList1 = new LinkedList();
    const testList2 = new LinkedList();

    testList1.append(1);
    testList1.append(2);
    testList2.append(1);
    testList2.append(2);

    expect(add(testList1, testList2)).toEqual({"head": {"next": {"next": {"next": null, "value": undefined}, "value": "4"}, "value": "2"}}); // eslint-disable-line
  });
});
