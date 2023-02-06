import { Queue } from "./Queue";

export class TwoQueueStack<T> {
  inbox: Queue<T>;
  constructor(data: T[] = []) {
    this.inbox = new Queue<T>(data);
  }

  push(element: T) {
    this.inbox.enqueue(element);
  }

  pop() {
    const queue = this.inbox.getBuffer();
    const size = queue.length - 1;
    const bufferQueue = new Queue<T>(queue);
    let count = 0;
    while(count < size) {
      const val = this.inbox.dequeue();
      if (val !== undefined) {
        bufferQueue.enqueue(val);
      }
        count += 1;
    }

    const popped = this.inbox.dequeue();
    this.inbox = bufferQueue;

    return popped;
  }
}

var queue2 = new TwoQueueStack();
queue2.push(1);
queue2.push(2);
queue2.push(3);
console.log(queue2.pop());
