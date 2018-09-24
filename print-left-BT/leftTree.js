'use strict';

const leftTree = (rootnode) => {
  if (!rootnode) return undefined;
  let leftBranches = '';
  
  const findleftTree = (node) => {
    if (!node) return null;
    if (node.left !== null) leftBranches = `${leftBranches}${node.left.value}`;
   
    findleftTree(node.left);
    findleftTree(node.right);
    return undefined;
  };

  findleftTree(rootnode);
  return leftBranches;
};

export default leftTree;
