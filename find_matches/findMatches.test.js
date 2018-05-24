'use strict';

import KaryTree from './findMatches';
import KaryNode from './karyNode';

describe('#findMatches should return each matched values as a new queue', () => {
  test('should return with ', () => {
    const one = new KaryNode(1);

    one.appendChild(1);
    one.appendChild(2);
    one.appendChild(3);
    one.appendChild(1);
    one.appendChild(3);
    one.appendChild(5);

    one.children[0].appendChild(1);
    one.children[0].appendChild(2);
    one.children[0].appendChild(3);

    one.children[3].appendChild(1);
    one.children[3].appendChild(2);

    one.children[5].appendChild(1);

    one.children[3].children[0].appendChild(3);
    one.children[3].children[1].appendChild(3);

    one.children[0].children[0].appendChild(3);
    one.children[0].children[1].appendChild(1);

    const tree = new KaryTree(one);
    
    expect(tree.findMatches(1)).toEqual([1, 1, 1, 1, 1, 1]);
  });
});
