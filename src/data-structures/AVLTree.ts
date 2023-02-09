// export type AVLTreeType<T> = AVLTree<T> | null;

// export class AVLTree<T> {
//   value: T;
//   left: AVLTreeType<T>;
//   right: AVLTreeType<T>;
//   depth: number;

//   constructor(value: T) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//     this.depth = 1;
//   }

//   setDepthBasedOnChildren() {
//     if (this.left !== null) {
//         this.depth = this.left.depth + 1;
//     }

//     if (this.right !== null && this.depth <= this.right.depth) {
//         this.depth = this.right.depth + 1;
//     }
//   }

//   rotateLL() {
//     const valueBefore = this.value;
//     const rightBeofre = this.right;
//     this.value = this.left?.value;

//     this.right = this.left;
//     this.left = this.left?.left;
//     this.right?.left = this.right?.right;
//     this.right?.right = rightBefore;
//     this.right?.value = valueBefore;

//     this.right?.getDepthBasedOnChildren();
//     this.getDepthBasedOnChildren;;
//   }
// }
