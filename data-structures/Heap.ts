export class Heap {
  items: number[];

  constructor() {
    this.items = [];
  }

  swap(index1: number, index2: number) {
    const temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }

  parent(index: number) {
    return this.items[this.parentIndex(index)];
  }

  left(index: number) {
    return this.items[this.leftIndex(index)];
  }

  right(index: number) {
    return this.items[this.rightIndex(index)];
  }

  peek() {
    return this.items[0];
  }

  size() {
    this.items.length;
  }

  parentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  leftIndex(index: number) {
    return index * 2 + 1;
  }

  rightIndex(index: number) {
    return index * 2 + 2;
  }
}

export class MinHeap extends Heap {
  add(item: number) {
    this.items.push(item);
    this.bubbleUp();
  }

  poll() {
    const item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
  }

  bubbleDown() {
    let index = 0;
    while (this.left(index) && this.left(index) < this.items[index]) {
      let smallerIndex = this.leftIndex(index);
      if (this.right(index) && this.right(index) < this.items[smallerIndex]) {
        smallerIndex = this.rightIndex(index);
      }
      this.swap(smallerIndex, index);
      index = smallerIndex;
    }
  }

  bubbleUp() {
    let index = this.items.length - 1;
    while (this.parent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }
}

export class MaxHeap extends Heap {
  add(item: number) {
    this.items.push(item);
    this.bubbleUp();
  }

  poll() {
    const item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
  }

  bubbleDown() {
    let index = 0;
    while (this.left(index) && this.left(index) > this.items[index]) {
      let largerIndex = this.leftIndex(index);
      if (this.right(index) && this.right(index) > this.items[largerIndex]) {
        largerIndex = this.rightIndex(index);
      }
      this.swap(largerIndex, index);
      index = largerIndex;
    }
  }

  bubbleUp() {
    let index = this.items.length - 1;
    while (this.parent(index) && this.parent(index) < this.items[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }
}

const minHeap1 = new MinHeap();

minHeap1.add(1);
minHeap1.add(10);
minHeap1.add(5);
minHeap1.add(100);
minHeap1.add(8);

console.log(minHeap1.poll());
console.log(minHeap1.poll());
console.log(minHeap1.poll());
console.log(minHeap1.poll());
console.log(minHeap1.poll());

const maxHeap1 = new MaxHeap();

maxHeap1.add(1);
maxHeap1.add(10);
maxHeap1.add(5);
maxHeap1.add(100);
maxHeap1.add(8);

console.log(maxHeap1.poll());
console.log(maxHeap1.poll());
console.log(maxHeap1.poll());
console.log(maxHeap1.poll());
console.log(maxHeap1.poll());