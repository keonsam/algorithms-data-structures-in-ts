import { partition } from "./partition"

export function quickSelectInPlace(arr: number[], l: number, h: number, k: number): number {
    const p = partition(arr, l, h);
    if (p === (k -1)) {
        return arr[p];
    }else if (p > (k - 1)) {
        return quickSelectInPlace(arr, l, p -1, k);
    }else {
        return quickSelectInPlace(arr, p + 1, h, k);
    }
}

var array = [1, 3, 3, -2, 3, 14, 7, 8, 1, 2, 2];

console.log(quickSelectInPlace(array,0,array.length-1, 6));