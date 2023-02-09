import { partition } from "./partition";

export function quickSort(arr: number[], left = 0, right = arr.length - 1) {
  const index = partition(arr, left, right);

  if (arr.length > 1) {
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }

    if (index < right) {
      quickSort(arr, index, right);
    }
  }

  return arr;
}

console.log(quickSort([6, 1, 23, 4, 2, 3]));
