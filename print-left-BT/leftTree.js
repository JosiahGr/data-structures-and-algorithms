'use strict';

export default function leftTree(rootnode) {
  if (!rootnode) return undefined;
  let leftBranches = '';
  if (rootnode.left) {
    leftBranches += `${rootnode.left.value}`;
    leftTree(rootnode.left);
  }
  leftTree(rootnode.right);
  return leftBranches;
}
