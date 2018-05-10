'use strict';

let maxValue = null;

function maxValueTraversal(rootNode) {
  if (!rootNode) {
    return undefined;
  }

  if (rootNode.value > maxValue) {
    maxValue = rootNode.value;
  }

  maxValueTraversal(rootNode.left);
  maxValueTraversal(rootNode.right);

  return maxValue;
}

export default maxValueTraversal;
