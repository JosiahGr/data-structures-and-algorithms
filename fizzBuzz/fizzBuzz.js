'use strict';

// Big O: Time O(n) Space O(h) -> h = height of tree

function fizzBuzz(rootNode) {
  if (!rootNode) return undefined;

  if (rootNode.value % 3 === 0 && rootNode.value % 5 === 0) {
    rootNode.value = 'fizzBuzz';
  } else if (rootNode.value % 5 === 0) {
    rootNode.value = 'buzz';
  } else if (rootNode.value % 3 === 0) {
    rootNode.value = 'fizz';
  }
  fizzBuzz(rootNode.left);
  fizzBuzz(rootNode.right);
  return undefined;
}

export default fizzBuzz;
