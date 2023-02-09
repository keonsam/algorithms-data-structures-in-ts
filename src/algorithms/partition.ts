import { swap } from "./swap";

export function partition(arr: number[], left: number, right: number) {
  const pivot = arr[Math.floor((left + right) / 2)];
  while (left < right) {
    while (pivot > arr[left]) {
      left++;
    }

    while (pivot < arr[right]) {
      right--;
    }

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return left;
}
