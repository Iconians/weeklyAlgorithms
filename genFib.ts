// Prompt: Write a function that takes a number n and returns the first n numbers in the Fibonacci sequence.
// Extension: Modify the function to return the Fibonacci sequence as a comma-separated string.

const genFib = (n: number) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.join(", ");
};

console.log(genFib(10)); // "0, 1, 1, 2, 3, 5, 8, 13, 21, 34"
