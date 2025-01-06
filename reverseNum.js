// Prompt: Write a function that reverses an input number.
// Extension: Do this without changing the data type of the number.

const reverseNum = (number) => {
  let num = 0;
  while (number > 0) {
    num = num * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return num;
};

// Test cases
console.log(reverseNum(586)); // 685
console.log(reverseNum(12345)); // 54321
console.log(reverseNum(100)); // 1
console.log(reverseNum(0)); // 0
console.log(reverseNum(987654321)); // 123456789
