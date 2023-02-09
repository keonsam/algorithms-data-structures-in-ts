function findSum(arr: number[], weight: number) {
  const hashTable: Record<string, number> = {};
  for (let num of arr) {
    if (hashTable[num] !== undefined) {
      return [num, hashTable[num]];
    }
    
    const diff = weight - num;
    hashTable[diff] = num;
  }

  return -1;
}

console.log(findSum([6, 5, 4, 3, 2, 1], 11));
