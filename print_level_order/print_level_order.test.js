'use strict';

import KaryTree from './print_level_order';
import KaryNode from './kary-node';

describe('#printLevelOrder should return each level in a string', () => {
  test('should return with ', () => {
    const one = new KaryNode('A');

    one.appendChild('B');
    one.appendChild('C');
    one.appendChild('D');
    one.appendChild('E');
    one.appendChild('F');
    one.appendChild('G');

    one.children[0].appendChild('H');
    one.children[0].appendChild('I');
    one.children[0].appendChild('J');

    one.children[3].appendChild('K');
    one.children[3].appendChild('L');

    one.children[5].appendChild('M');

    one.children[3].children[0].appendChild('P');
    one.children[3].children[1].appendChild('Q');

    one.children[0].children[0].appendChild('N');
    one.children[0].children[1].appendChild('O');

    const tree = new KaryTree(one);
    
    expect(tree.printLevelOrder()).toEqual('A BCDEFG HIJKLM NOPQ ');
  });
});
