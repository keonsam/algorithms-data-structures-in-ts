

export function base10ToString(n: number) {
  let binaryString = "";
  function base10ToStringHelper(n: number) {
    if (n < 2) {
      binaryString += n;
    } else {
      base10ToStringHelper(Math.floor(n / 2));
      base10ToStringHelper(n % 2);
    }
  }
  base10ToStringHelper(n);
  return binaryString;
}

console.log(base10ToString(4));