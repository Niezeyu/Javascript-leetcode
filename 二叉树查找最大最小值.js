// 最小值
min(root) {
  let pos = root
  while(pos !== null && pos.left !== null) {
    pos = pos.left
  }
  return pos.key
}
// 最大值
max(root) {
  let pos = root
  while(pos !== null && pos.right !== null) {
    pos = pos.right
  }
  return pos.key
}