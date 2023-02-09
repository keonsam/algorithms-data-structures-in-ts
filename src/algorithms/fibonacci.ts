export function getNthFibonacci(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return getNthFibonacci(n - 1) + getNthFibonacci(n - 2);
    };
}

export function getNthFibonacciBetter(n: number, lastLast = 0, last = 1) {
  if (n === 0) {
    return lastLast;
  }
  if (n === 1) {
    return last;
  }
  return getNthFibonacciBetter(n - 1, last, lastLast + last);
}

console.log(getNthFibonacci(10));