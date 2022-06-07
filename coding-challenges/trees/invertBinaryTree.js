/**
 * Invert a Binary Tree
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const invertTree = (root) => {
  function swapNode(node) {
    if (!node) return;

    const prevNode = node.left;
    node.left = node.right;
    node.right = prevNode;

    swapNode(node.left);
    swapNode(node.right);
  }

  swapNode(root);
  return root;
};

//=== Invert Binary Tree Complexity Analysis
// Time Complexity: O(N) we traverse thru every Node in the Tree
// Space Complexity: O(1)
// If recursive calls count as space complexity --> O(N) space

//==== Test ====
console.log(invertTree([4, 2, 7, 1, 3, 6, 9]));
