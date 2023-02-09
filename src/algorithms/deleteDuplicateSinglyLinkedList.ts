import SinglyLinkedList, { SinglyLinkedListNodeT } from "../data-structures/SinglyLinkedList";

export function deleteDuplicateSinglyLinkedList<T>(lList: SinglyLinkedList<T>) {
    let currentHead = lList.head;
    let prev: SinglyLinkedListNodeT<T> = lList.head;
    const store: Record<string, boolean> = {};

    while(currentHead) {
        const key = String(currentHead.data);
        if(store[key]) {
            if (prev) {
                prev.next = currentHead.next;
                lList.size--;
            }
        }else {
            store[key] = true;
            prev = currentHead;
        }
        currentHead = currentHead.next;
    };
}