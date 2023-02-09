export class Queue<T> {
  private array: T[];
  constructor(array: T[] = []) {
    this.array = array;
  }

  getBuffer() {
    return this.array.slice();
  }

  isEmpty() {
    return this.array.length === 0;
  }

  peek() {
    return this.array[0];
  }

  enqueue(data: T) {
    this.array.push(data);
  }

  dequeue() {
    return this.array.shift();
  }
}

export function queueAccessNthTopNode<T>(queue: Queue<T>, n: number) {
  const arr = queue.getBuffer();
  const { length } = arr;
  const bufferArray = new Queue<T>(arr);

  if (n <= 0 || n > length) {
    throw new Error(`n must be from 1 - ${length}.`);
  }

  while (n !== 1) {
    bufferArray.dequeue();
    n--;
  }

  return bufferArray.dequeue();
}

// var queue2 = new Queue();
// queue2.enqueue(1);
// queue2.enqueue(2);
// queue2.enqueue(3);
// console.log(queueAccessNthTopNode<number>(stack2,3));

export function queueSearch<T>(queue: Queue<T>, element: unknown) {
  const bufferArray = new Queue(queue.getBuffer());

  while (!bufferArray.isEmpty()) {
    if (bufferArray.dequeue() === element) {
      return true;
    }
  }

  return false;
}

// var queue2 = new Queue();
// queue2.enqueue(1);
// queue2.enqueue(2);
// queue2.enqueue(3);
// console.log(queueSearch<number>(queue2, 2));
