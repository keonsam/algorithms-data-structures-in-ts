abstract class HashTable {
  size: number;
  keys: number[];
  values: unknown[];
  limit: number;

  constructor(size: number) {
    this.size = size;
    this.keys = new Array(size);
    this.values = new Array(size);
    this.limit = 0;
  }

  abstract put(key: number, value: unknown): void;

  abstract get(key: number): unknown;

  hash(key: number) {
    return key % this.size;
  }
}

export class LinearProbHashTable extends HashTable {
  put(key: number, value: unknown) {
    if (this.limit >= this.size) throw new Error("hash table is full");

    let hashIndex = this.hash(key);

    while (this.keys[hashIndex] !== undefined) {
      hashIndex = (hashIndex + 1) % this.size;
    }

    this.keys[hashIndex] = key;

    this.values[hashIndex] = value;

    this.limit += 1;
  }

  get(key: number) {
    let hashIndex = this.hash(key);

    while (this.keys[hashIndex] !== key) {
      hashIndex = (hashIndex + 1) % this.size;
    }

    return this.values[hashIndex];
  }
}

// var exampletable = new LinearProbHashTable(13);
// exampletable.put(7, "hi");
// exampletable.put(20, "hello");
// exampletable.put(33, "sunny");
// exampletable.put(46, "weather");
// exampletable.put(59, "wow");
// exampletable.put(72, "forty");
// exampletable.put(85, "happy");
// exampletable.put(98, "sad");

// console.log(exampletable.keys);
// console.log(exampletable.values);

export class QuadraticProbHashTable extends HashTable {
  put(key: number, value: unknown): void {
    if (this.limit >= this.size) throw new Error("hash table is full");

    let hashIndex = this.hash(key);
    let squareCount = 1;

    while (this.keys[hashIndex] !== undefined) {
      hashIndex += Math.pow(squareCount, 2);
    }

    this.keys[hashIndex] = key;

    this.values[hashIndex] = value;

    this.limit += 1;
  }

  get(key: number): unknown {
    let hashIndex = this.hash(key);
    let squareCount = 1;

    while (this.keys[hashIndex] !== key) {
      hashIndex += Math.pow(squareCount, 2);
    }

    return this.values[hashIndex];
  }
}

// var exampletable = new QuadraticProbHashTable(13);
// exampletable.put(7, "hi");
// exampletable.put(20, "hello");
// exampletable.put(33, "sunny");
// exampletable.put(46, "weather");
// exampletable.put(59, "wow");
// exampletable.put(72, "forty");
// exampletable.put(85, "happy");
// exampletable.put(98, "sad");

// console.log(exampletable.keys);
// console.log(exampletable.values);

export class DoubleHashLinearProb extends LinearProbHashTable {
  hash(key: number): number {
    return this.secondHash(key % this.size);
  }

  secondHash(hashIndex: number): number {
    const r = this.size - 2;
    return r - (hashIndex % r);
  }
}

// var exampletable = new DoubleHashLinearProb(13);
// exampletable.put(7, "hi");
// exampletable.put(20, "hello");
// exampletable.put(33, "sunny");
// exampletable.put(46, "weather");
// exampletable.put(59, "wow");
// exampletable.put(72, "forty");
// exampletable.put(85, "happy");
// exampletable.put(98, "sad");

// console.log(exampletable.keys);
// console.log(exampletable.values);
