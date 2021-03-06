/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    if(root === null) {
        return true;
    }

    return isMirror(root.left, root.right);
};

var isMirror = function(tree1, tree2) {
    if(tree1 === null || tree2 === null) {
        return tree1 === tree2;
    }

    if(tree1.val !== tree2.val) {
        return false;
    }

    return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left);
};


console.log(isSymmetric([1,2,2,3,4,4,3]));