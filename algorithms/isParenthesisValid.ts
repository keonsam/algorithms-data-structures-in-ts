import Stack from '../data-structures/Stack';

export function isParenthesisValid(validationString: string) {
    const stack = new Stack();
    for(let i = 0; i < validationString.length; i++) {
        const char = validationString[i];
        if (char === "(") {
            stack.push(char);
        }else if (char === ")") {
            if (stack.isEmpty()) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.isEmpty();
}

console.log(isParenthesisValid("((()")); // false;
console.log(isParenthesisValid("((((")); // false;
console.log(isParenthesisValid("(()())")); // true;
