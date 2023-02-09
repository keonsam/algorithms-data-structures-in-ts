export type SinglyLinkedListNodeT<T> = SinglyLinkedListNode<T> | null;

export class SinglyLinkedListNode<T> {
  data: T;
  next: SinglyLinkedListNodeT<T>;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export default class SinglyLinkedList<T> {
  head: SinglyLinkedListNodeT<T>;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  insert(data: T) {
    const newNode = new SinglyLinkedListNode<T>(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      const temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
  }

  delete(data: T) {
    let currentHead = this.head;
    if (currentHead?.data === data) {
      this.head = this.head?.next || null;
      this.size--;
    } else {
      let prev = currentHead;
      while (currentHead?.next) {
        if (currentHead.data === data) {
          if (!prev) throw new Error("something went wrong");
          prev.next = currentHead.next;
          prev = currentHead;
          currentHead = currentHead.next;
          break;
        }

        prev = currentHead;
        currentHead = currentHead.next;
      }
      if (currentHead?.data === data) {
        if (!prev) throw new Error("something went wrong");
        prev.next = null;
      }
      this.size--;
    }
  }

  find(data: T) {
    let currentHead = this.head;

    while (currentHead) {
      if (currentHead.data === data) {
        return true;
      }

      currentHead = currentHead.next;
    }

    return false;
  }
}


var sll1 = new SinglyLinkedList<number>();
sll1.insert(1);
sll1.insert(12);
sll1.insert(20);

console.log(sll1.head);