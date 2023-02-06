export function isPalindromeRecursive(word: String, begin = 0, end = word.length - 1): boolean {
    if (begin >= end) {
        return true;
    }

    if (word.charAt(begin) !== word.charAt(end)) {
        return false;
    }

    return isPalindromeRecursive(word, begin + 1, end - 1);
}
console.log(isPalindromeRecursive('hi'));