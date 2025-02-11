export class Stack {
  private item: any[];

  constructor() {
    this.item = [];
  }

  push(el: any) {
    this.item.push(el);
  }

  isEmpty() {
    return this.item.length === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.item.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.item[this.item.length - 1];
  }

  size() {
    return this.item.length;
  }

  print() {
    console.log(this.item);
  }
}

// Balanced Parentheses:
// Write a function that takes a string of parentheses and determines if they are balanced. For example, "{[()]}" is balanced, but "{[(])}" is not.
// Hint: Use a stack to push opening brackets and pop them when closing brackets are encountered.

const balanceParentheses = (str: string): boolean => {
  const stack = new Stack();
  const set = new Set(["(", "[", "{"]);
  const map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  for (let char of str) {
    if (set.has(char)) {
      stack.push(char);
    } else if (map.has(char)) {
      if (stack.size() === 0 || stack.pop() !== map.get(char)) {
        return false;
      }
    }
  }
  return stack.size() === 0;
};

// console.log(balanceParentheses("{[()]}"));
// console.log(balanceParentheses("{[(])}"));

// Reverse a Stack:
// Implement a function that reverses the contents of a stack without using any additional
// data structures like arrays or lists.
// Hint: Use recursion to reverse the stack.

const reverseStack = (stack: any): any => {
  if (stack.isEmpty()) return false;
  const top = stack.pop();

  reverseStack(stack);
  insertAtBottom(stack, top);
};

const insertAtBottom = (stack: any, item: any) => {
  if (stack.isEmpty()) {
    stack.push(item);
    return;
  }
  const top = stack.pop();
  insertAtBottom(stack, item);
  stack.push(top);
};

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

reverseStack(stack);
console.log(stack);

// Evaluate Postfix Expression:
// Write a function that evaluates a postfix expression. The expression will consist of
// operands and operators, e.g., 3 4 + 2 * should output 14.
// Hint: Use a stack to hold operands and evaluate when operators are encountered.

// Sort a Stack:
// Implement a function to sort a stack in ascending order without using any additional
// data structures. You can only use one additional stack to help.
// Hint: Use recursion to insert elements into the sorted stack.

// Largest Rectangle in Histogram:
// Given an array of heights representing a histogram where the width of each bar is 1,
// write a function to find the largest rectangle that can be formed within the histogram.
// Hint: Use a stack to efficiently calculate the largest rectangle.
