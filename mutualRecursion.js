function F(n) {
  if (n === 0) {
    return 1; // Base case for F
  } else {
    return n - M(F(n - 1)); // Recursive case for F
  }
}

function M(n) {
  if (n === 0) {
    return 0; // Base case for M
  } else {
    return n - F(M(n - 1)); // Recursive case for M
  }
}

// Example usage:
console.log(F(0)); // Output: 1
console.log(M(0)); // Output: 0
console.log(F(5)); // Example: Output based on the recursion
console.log(M(5)); // Example: Output based on the recursion
