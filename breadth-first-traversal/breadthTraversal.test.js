'use strict';

import Node from './node';
import BinaryTree from './binary-tree';
import breadthTraversal from './breadthTraversal';

describe('#breadthTraversal', () => {
  test('should return null if empty', () => {
    const tree = new BinaryTree(null);
    expect(breadthTraversal(tree.root)).toBeNull();
  });

  test('should return the rootNodes value, in order, at each level of a binary tree', () => {
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

    breadthTraversal(tree.root);
    expect(breadthTraversal(tree.root)).toEqual('12364530789');
  });
  test('should return (1211641030789))', () => {
    const one = new Node(1);
    const two = new Node(2);
    const eleven = new Node(11);
    const four = new Node(4);
    const ten = new Node(10);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const thirty = new Node(30);
    const tree = new BinaryTree(one);

    one.left = two;
    one.right = eleven;
    eleven.left = four;
    eleven.right = ten;
    two.left = six;
    six.right = seven;
    six.left = thirty;
    seven.left = eight;
    seven.right = nine;

    breadthTraversal(tree.root);
    expect(breadthTraversal(tree.root)).toEqual('1211641030789');
  });
});
