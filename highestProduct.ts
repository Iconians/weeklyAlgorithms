// Prompt: Given an array of integers, find the highest product of two unique numbers in the array.
// Extension: Do not use native methods.

const highestProduct = (arr: number[]) => {
  let high = 0;
  let secondHigh = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > high) {
      secondHigh = high;
      high = arr[i];
    }
    if (arr[i] > secondHigh && arr[i] < high) {
      secondHigh = arr[i];
    }
  }
  return high * secondHigh;
};

console.log(highestProduct([1, 2, 3, 4, 5])); // 20
console.log(highestProduct([1, 2, 3, 4, 5, 6])); // 30
console.log(highestProduct([1, 2, 3, 4, 5, 6, 7])); // 42
console.log(highestProduct([1, 2, 3, 4, 5, 6, 7, 8])); // 56
console.log(highestProduct([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 72
console.log(highestProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 90
console.log(highestProduct([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // 90
console.log(highestProduct([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // 90
