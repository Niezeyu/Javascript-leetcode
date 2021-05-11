/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
  const res = []
  const inOrder = function(root) {
    if(!root){
      return
    }
    // 先将root全部遍历完成,找到最底层的root.left 之后向上打印root.val,在找最右的打印
    inOrder(root.left)
    res.push(root.val)
    inOrder(root.right)
  }
  inOrder(root)
  return res
}
