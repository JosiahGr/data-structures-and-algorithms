'use strict';

// Big O - Time o(n) Space o(h)

let maxValue = null;

function maxValueTraversal(rootNode) {
  if (!rootNode) return null;

  if (rootNode.value > maxValue) {
    maxValue = rootNode.value;
  }

  maxValueTraversal(rootNode.left);
  maxValueTraversal(rootNode.right);

  return maxValue;
}

export default maxValueTraversal;
