'use strict';

import Node from './node';
import BinaryTree from './binary-tree';
import leftTree from './leftTree';

describe('#leftTree', () => {
  test('should return null if empty', () => {
    const tree = new BinaryTree(null);
    expect(leftTree(tree.root)).toEqual(undefined);
  });
  test('Should return the values of all left branches', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const thirty = new Node(30);
    const tree = new BinaryTree(one);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    six.left = thirty;
    seven.left = eight;
    seven.right = nine;

    expect(one.left.value).toEqual(2);
    expect(leftTree(tree.root)).toEqual('246308');
  });
});
