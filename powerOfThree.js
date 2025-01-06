// Prompt: Given an integer n, write a function to determine if it is a power of three.

const powerOfThree = (num) => {
  if (num < 1) return false;

  while (num % 3 === 0) {
    num /= 3;
  }
  return num === 1;
};

console.log(powerOfThree(1)); // true
console.log(powerOfThree(3)); // true
console.log(powerOfThree(9)); // true
console.log(powerOfThree(27)); // true
console.log(powerOfThree(6)); // false
console.log(powerOfThree(0)); // false
console.log(powerOfThree(-3)); // false
console.log(powerOfThree(1027));
