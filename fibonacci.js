// Prompt: Write a recursive function that returns the n-th number 
// in the Fibonacci sequence using a recursive approach. 
// Bonus: write a non-recursive, iterative approach.
// Bonusx2: Memoize this function

// 1st case recursion
const fib1 = (num) => {
  if (num === 0) return 0
  if (num === 1) return 1

  return fib1(num - 1) + fib1(num - 2)
}

// console.log(fib1(0));  // Output: 0
// console.log(fib1(1));  // Output: 1
// console.log(fib1(6));  // Output: 8
// console.log(fib1(10)); // Output: 55

// 2nd case iterative 
const fib2 = (num) => {
  if (num === 0) return 0
  if (num === 1) return 1
  let prev1 = 1
  let prev2 = 0
  let result = 0

  for (let i = 2; i <= num; i++) {
    result = prev1 + prev2
    prev2 = prev1
    prev1 = result
  }
  return result
}

console.log(fib2(0));  // Output: 0
console.log(fib2(1));  // Output: 1
console.log(fib2(6));  // Output: 8
console.log(fib2(10)); // Output: 55

// 3rd case memoization
const fib3 = (num, memo = {}) => {
  if (num === 0) return 0
  if (num === 1) return 1
  if (memo[num]) return memo[num]

  memo[num] = fib3(num - 1, memo) + fib3(num - 2, memo)
  return memo[num]
}

// console.log(fib3(0));  // Output: 0
// console.log(fib3(1));  // Output: 1
// console.log(fib3(6));  // Output: 8
// console.log(fib3(10)); // Output: 55
// console.log(fib3(50)); // Output: 12586269025