'use strict';

import KaryTree from './print_level_order';
import KaryNode from './kary-node';

describe('#printLevelOrder should return each level in a string', () => {
  test('should return with A BCDEFG HIJKLM NOPQ ', () => {
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

  test('test should return with A 1C2E3G HI5KL7 9OPQ ', () => {
    const one = new KaryNode('A');

    one.appendChild('1');
    one.appendChild('C');
    one.appendChild('2');
    one.appendChild('E');
    one.appendChild('3');
    one.appendChild('G');

    one.children[0].appendChild('H');
    one.children[0].appendChild('I');
    one.children[0].appendChild('5');

    one.children[3].appendChild('K');
    one.children[3].appendChild('L');

    one.children[5].appendChild('7');

    one.children[3].children[0].appendChild('P');
    one.children[3].children[1].appendChild('Q');

    one.children[0].children[0].appendChild('9');
    one.children[0].children[1].appendChild('O');

    const tree = new KaryTree(one);
    
    expect(tree.printLevelOrder()).toEqual('A 1C2E3G HI5KL7 9OPQ ');
  });
  test('test should return with A 152E3G 5I5KL9 9200PQ ', () => {
    const one = new KaryNode('A');

    one.appendChild('1');
    one.appendChild('5');
    one.appendChild('2');
    one.appendChild('E');
    one.appendChild('3');
    one.appendChild('G');

    one.children[0].appendChild('5');
    one.children[0].appendChild('I');
    one.children[0].appendChild('5');

    one.children[3].appendChild('K');
    one.children[3].appendChild('L');

    one.children[5].appendChild('9');

    one.children[3].children[0].appendChild('P');
    one.children[3].children[1].appendChild('Q');

    one.children[0].children[0].appendChild('9');
    one.children[0].children[1].appendChild('200');

    const tree = new KaryTree(one);
    
    expect(tree.printLevelOrder()).toEqual('A 152E3G 5I5KL9 9200PQ ');
  });
});
