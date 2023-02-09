import SinglyLinkedList, { SinglyLinkedListNodeT } from "../data-structures/SinglyLinkedList";

export function reverseSinglyLinkedList<T>(lList: SinglyLinkedList<T>) {
    let current = lList.head;
    let prev: SinglyLinkedListNodeT<T> = null;

    while(current) {
        const temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    return current;
}