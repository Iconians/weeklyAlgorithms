// "Prompt: Write a function that determines if a number is prime.
// Extension: Modify the function to return an array of all prime numbers less than the given number."

const isPrime = (num: number): number[] => {
  const arr: number[] = [];

  for (let i = 2; i < num; i++) {
    let prime = true;
    for (let j = 2; j <= Math.sqrt(i); j++)
      if (i % j === 0) {
        prime = false;
        break;
      }
    if (prime) arr.push(i);
  }
  return arr;
};

console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(10));
