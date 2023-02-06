export function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr: number[], rightArr: number[]): number[] {
  let l = 0,
    r = 0;
  const result: number[] = [];

  while (l < leftArr.length && r < rightArr.length) {
    if (leftArr[l] < rightArr[r]) {
      result.push(leftArr[l]);
      l++;
    } else {
      result.push(rightArr[r]);
      r++;
    }
  }

  if (l < leftArr.length) {
    result.push(...leftArr.slice(l));
  } else {
    result.push(...rightArr.slice(r));
  }

  return result;
}

console.log(mergeSort([6, 1, 23, 4, 2, 3]));
