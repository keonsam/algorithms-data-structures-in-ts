import Stack from "./Stack";

export default class SortableStack {
  size: number;
  mainStack: Stack<number> = new Stack();
  sortedStack: Stack<number> = new Stack();

  constructor(size: number) {
    this.size = size;
    for(let i = 0; i < size; i++) {
        this.mainStack.push(Math.floor(Math.random() * size));
    }
  }

  sortStackDescending() {
    while(!this.mainStack.isEmpty()) {
        const temp = this.mainStack.pop();
        while(!this.sortedStack.isEmpty() &&  this.sortedStack.peek() < temp) {
            this.mainStack.push(this.sortedStack.pop());
        }

        this.sortedStack.push(temp);
    }
  }
}

const ss = new SortableStack(10);
console.log(ss.mainStack);
ss.sortStackDescending();
console.log(ss.sortedStack);
