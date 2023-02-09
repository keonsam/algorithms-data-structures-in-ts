import Stack from "./Stack";

export class TwoStackQueue<T> {
    inbox: Stack<T>;
    outbox: Stack<T>;
    constructor(data: T[] = []) {
        this.inbox = new Stack(data);
        this.outbox = new Stack();
        this.updateOutbox();
    }

    updateOutbox() {
        this.outbox = new Stack();
        const bufferArray = new Stack(this.inbox.getBuffer());
        while(!bufferArray.isEmpty()) {
            const val = bufferArray.pop();
            if (val !== undefined) {
                this.outbox.push(val);
            }
        }
    }

    enqueue(element: T) {
        this.inbox.push(element);
        this.updateOutbox();
    }

    dequeue() {
        return this.outbox.pop();
    }
}

var queue2 = new TwoStackQueue<number>();
queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(3);
console.log(queue2.dequeue());
