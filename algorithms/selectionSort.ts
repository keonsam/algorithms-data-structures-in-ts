import { swap } from "./swap";

export function selectionSort(arr: number[]) {
    const { length: len } = arr;
    for(let i = 0; i < len; i++) {
        let min = i;
        for(let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (i != min) {
            swap(arr, i, min);
        }
    }

    return arr;
}

console.log(selectionSort([6,1,23,4,2,3]));