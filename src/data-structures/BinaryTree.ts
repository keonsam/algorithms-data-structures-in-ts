export type IBinaryTreeNode<T> = BinaryTreeNode<T> | null;

export class BinaryTreeNode<T> {
  value: T;
  left: IBinaryTreeNode<T>;
  right: IBinaryTreeNode<T>;
  constructor(value: T) {
    this.value = value;
  }
}

export default class BinaryTree<T> {
  protected root: IBinaryTreeNode<T>;

  traversePreOrder() {
    return this.traversePreOrderHelper<T>(this.root);
  }

  private traversePreOrderHelper<T>(node: IBinaryTreeNode<T>) {
    if (node === null) {
      return;
    }

    console.log(node.value);
    this.traversePreOrderHelper(node.left);
    this.traversePreOrderHelper(node.right);
  }

  traverseInOrder() {
    return this.traverseInOrderHelper(this.root);
  }

  private traverseInOrderHelper(node: IBinaryTreeNode<T>) {
    if (node === null) {
      return;
    }

    this.traversePreOrderHelper(node.left);
    console.log(node.value);
    this.traversePreOrderHelper(node.right);
  }

  traversePostOrder() {
    return this.traversePostOrderHelper(this.root);
  }

  private traversePostOrderHelper(node: IBinaryTreeNode<T>) {
    if (node?.left) {
      this.traversePostOrderHelper(node.left);
    }

    if (node?.right) {
      this.traversePostOrderHelper(node.right);
    }

    console.log(node?.value);
  }

  traverseLevelOrder() {
    const queue: IBinaryTreeNode<T>[] = [];

    if (!this.root) {
      return;
    }

    queue.push(this.root);

    while (queue.length) {
      const temp = queue.shift();
      console.log(temp?.value);
      if (temp?.left) {
        queue.push(temp.left);
      }

      if (temp?.right) {
        queue.push(temp.right);
      }
    }
  }
}
