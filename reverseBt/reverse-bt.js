'use strict';

export default function reverseBt(root) {
  if (!root) return undefined;
  let temp = null;
  let values = '';

  reverseBt(root.left);

  temp = root.right;
  root.right = root.left;
  root.left = temp;
  values += root;

  reverseBt(root.right);

  return values;
}
