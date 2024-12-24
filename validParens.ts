// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if the brackets are closed in the correct order.

const validParens = (str: string): boolean => {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of str) {
    if (["(", "[", "{"].includes(char)) {
      stack.push(char);
    } else if (char in pairs) {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// console.log(validParens('(', ')', '{', '}', '[' "and", ']'))
// base valid cases
console.log(validParens("()")); // true: Simple parentheses are closed correctly
console.log(validParens("()[]{}")); // true: All types of brackets are balanced and in order
console.log(validParens("{[]}")); // true: Nested brackets are properly closed

// invalid cases
console.log(validParens("(]")); // false: Mismatched closing bracket
console.log(validParens("([)]")); // false: Brackets are not closed in the correct order
console.log(validParens("{[}")); // false: Missing closing bracket for `[`

// edge cases
console.log(validParens("")); // true: Empty string is valid
console.log(validParens("(")); // false: Opening parenthesis is not closed
console.log(validParens("]")); // false: Closing bracket without opening bracket
console.log(validParens("{[()]}")); // true: Properly nested and ordered brackets
console.log(validParens("{[(])}")); // false: Incorrectly nested brackets

// stress cases
console.log(validParens("()".repeat(1000))); // true: Large number of valid parentheses
console.log(validParens("[".repeat(1000) + "]".repeat(1000))); // true: Large number of valid brackets
console.log(validParens("[".repeat(1000) + ")".repeat(1000))); // false: Mismatched brackets with incorrect order
