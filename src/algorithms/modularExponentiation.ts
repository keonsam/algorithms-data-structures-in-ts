export function modularExponentiation (base: number, exponent: number, modulus: number) {
    if (modulus === 1) return 1;
    let value = 1;
    for (let i = 0; i < exponent; i++) {
        value = (value * base) % modulus;
    }
    return modulus;
}