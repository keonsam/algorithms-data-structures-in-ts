export default class Stack<T> {
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
    return this.array[this.array.length - 1];
  }

  push(data: T) {
    this.array.push(data);
  }

  pop(): T {
    const popped = this.array.pop();
    if (popped !== undefined) {
          return popped;
    }else {
      throw new Error('Stack is empty');
    }
  }
}

export function stackAccessNthTopNode<T>(stack: Stack<T>, n: number) {
    const arr = stack.getBuffer();
  const { length } = arr;
  const bufferArray = new Stack(arr);

  if (n <= 0 || n > length) {
    throw new Error(`n must be from 1 - ${length}.`);
  }

  while (n !== 1) {
    bufferArray.pop();
    n--;
  }

  return bufferArray.pop();
}

// var stack2 = new Stack<number>();
// stack2.push(1);
// stack2.push(2);
// stack2.push(3);
// console.log(stackAccessNthTopNode<number>(stack2,3));

export function stackSearch<T>(stack: Stack<T>, element: T) {
  const bufferArray = new Stack(stack.getBuffer());

  while(!bufferArray.isEmpty()) {
    if(bufferArray.pop() === element) {
        return true;
    }
  }

  return false;
};

// var stack2 = new Stack<number>();
// stack2.push(1);
// stack2.push(2);
// stack2.push(3);
// console.log(stackSearch<number>(stack2, 2));

