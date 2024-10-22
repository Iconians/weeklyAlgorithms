// Write a function that takes a non-negative integer and returns its factorial.

const factorial = (n: number): number => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(5)); // 120

// Modify the function to handle large numbers by using memoization to improve efficiency.

const factorialMemo = (
  n: number,
  memo: Record<number, number> = {}
): number => {
  if (n === 0) return 1;
  if (memo[n]) return memo[n];
  return (memo[n] = n * factorialMemo(n - 1, memo));
};

console.log(factorialMemo(5)); // 120
