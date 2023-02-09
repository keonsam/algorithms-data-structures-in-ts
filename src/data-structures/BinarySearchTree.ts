import BinaryTree, { BinaryTreeNode, IBinaryTreeNode } from "./BinaryTree";

export class BinarySearchTree<T> extends BinaryTree<T> {
  insert(value: T) {
    const newNode = new BinaryTreeNode<T>(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode: IBinaryTreeNode<T> = this.root;
    while (true) {
      if (value < currentNode) {
        if (currentNode?.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          break;
        }
      } else if (value > currentNode) {
        if (currentNode?.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          break;
        }
      } else {
        break;
      }
    }
  }

  remove(value: T) {
    return this.deleteRecursively(this.root, value);
  }

  deleteRecursively(root: IBinaryTreeNode<T>, value: T): IBinaryTreeNode<T> {
    if (!root) {
      return null;
    } else if (value < root.value) {
      root.left = this.deleteRecursively(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteRecursively(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        root = root.right;
        return root;
      } else if (!root.right) {
        root = root.left;
        return root;
      } else {
        const temp = this.findMin(root.right);
        root.value = temp.value;
        root.right = this.deleteRecursively(root.right, temp.value);
        return root;
      }
    }

    return null;
  }

  private findMin(root: IBinaryTreeNode<T>): BinaryTreeNode<T> {
    while (root?.left) {
      root = root.left;
    }

    if (!root) throw new Error("min not found");

    return root;
  }

  find(value: T) {
    let currentNode = this.root;
    let found = false;
    while(currentNode) {
      if (value === currentNode.value) {
        found = true;
        break;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      }else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }

    return found;
  }
}
