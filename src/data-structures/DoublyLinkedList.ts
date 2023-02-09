export class DoublyLinkedListNode<T> {
  data: T;
  prev: DoublyLinkedListNode<T> | null;
  next: DoublyLinkedListNode<T> | null;
  constructor(data: T) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

export default class DoublyLinkedList<T> {
  head: DoublyLinkedListNode<T> | null;
  tail: DoublyLinkedListNode<T> | null;
  size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addAtFront(data: T) {
    const newNode = new DoublyLinkedListNode(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  insertAtTail(data: T) {
    const newNode = new DoublyLinkedListNode(data);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  deleteAtHead() {
    if (this.head) {
      const toReturn = this.head.data;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
      }

      this.size--;
      return toReturn;
    }
  }

  deleteAtTail() {
    if (this.tail) {
      const toReturn = this.tail.data;
      if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        if (this.tail) this.tail.next = null;
      }

      this.size--;
      return toReturn;
    }
  }

  findStartingHead(data: T) {
    let currentHead = this.head;

    while (currentHead) {
      if (currentHead.data === data) {
        return true;
      }

      currentHead = currentHead.next;
    }

    return false;
  }

  findStartingTail(data: T) {
        let currentTail = this.tail;

        while (currentTail) {
          if (currentTail.data === data) {
            return true;
          }

          currentTail = currentTail.prev;
        }

        return false;
  }
}
