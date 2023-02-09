import { swap } from "./swap";
export function bubbleSort(arr: number[]) {
    for(let i = 0, len = arr.length; i < len; i++) {
        for(let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                swap(arr, i, j);
            }
        }
    }

    return arr;
}

console.log(bubbleSort([6, 1, 2, 3, 4, 5]));