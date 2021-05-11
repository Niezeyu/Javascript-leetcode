// 思路:
// 判断root是否围殴空,为空时直接返回val的node实例对象生成一个新的树
// 如果不为空,判断root的键与val值得大小,分别new实例对象
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
 * @param {number} val
 * @return {TreeNode}
 */
var insert = function(root, val) {
  // 如果为空:生成新得实例对象即可
  if(root === null) {
    return new Node(val)
  }
  // 如果不为空
  let pos = root
  while(pos !== null) {
    if(pos.val > val) {
      // 如果根得键大于val,那么这个val应该插入到左边
      if(pos.left === null) {
        // 如果左节点为空,将val的node实例对象赋值给左节点
        pos.left = new Node(val)
        // 结束循环
        break;
      }else{
        pos = pos.left
      }
    } else {
      // 同理,操作右节点
      if(pos.right === null) {
        pos.right = new Node(val)
        // 结束循环
        break;
      }else{
        pos = pos.right
      }
    }
  }
  // 循环结束时,将root返回出去
  return root
}