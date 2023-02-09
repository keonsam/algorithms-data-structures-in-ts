import { isPrime } from "./isPrime";

export function allPrimeLessThanN(n: number) {
  const primeN: number[] = [];
  if (n <= 1) return 0;
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      primeN.push(i);
    }
  }

  return primeN;
}

console.log(allPrimeLessThanN(100));
