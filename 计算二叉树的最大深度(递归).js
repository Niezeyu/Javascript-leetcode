getNodeHeight(root) {
  if(root === null) {
    return -1
  }
  return Math.max(this.getNodeHeight(root.left), this.getNodeHeight(root.right)) + 1;
}